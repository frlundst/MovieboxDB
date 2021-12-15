import React from 'react';
import SearchFormView from '../views/searchFormView.js';
import SearchResultsView from '../views/searchResultsView.js';
import promiseNoData from '../promiseNoData.js';
import { ApiFetch } from '../apiFetch.js';
import { useInfiniteScroll } from '../model.js';

function SearchPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [query, setQuery] = React.useState(null);
    const [nextPage, setNextPage] = React.useState(null);
    const [isFetching, setIsFetching, stop] = useInfiniteScroll(getMoreFeed);
    const [bottom, setBottom] = React.useState(false);

    async function getMoreFeed() {
        if (nextPage && !bottom) {
            setPromise(
                ApiFetch.searchMovie(query, nextPage)
                    .then((newData) => {
                        if(newData.results.length > 0){
                            setData(data.concat(newData.results));
                            setIsFetching(false);
                            setNextPage(nextPage + 1)
                        }else{
                            setBottom(bottom);
                        }
                    })
                    .catch((error) => setError(error))
            );
        } else {
          setIsFetching(false);
        }
    }

    React.useEffect(() => {
        setPromise(ApiFetch.getTopMovies()
            .then(data => {
                setData(data.results); 
                })
            .catch(error => setError(error)));
    }, []);

    return (
        <div>
            <SearchFormView 
                onText={text => setQuery(text)}
                onSearch={() => {
                    setData(null);
                    setError(null);
                    setPromise(
                        ApiFetch.searchMovie(query)
                            .then((data) => {
                                setData(data.results); 
                                setNextPage(2);})
                            .catch((error) => setError(error))
                    );
                }}
            ></SearchFormView>
            {promiseNoData(promise, data, error) || <SearchResultsView 
                searchResults={data}
                onClick={(id) => {
                    props.model.setCurrentMovie(id);
                    window.location.hash="#movieDetails";
                }}
            ></SearchResultsView>}
        </div>
    );
}

export default SearchPresenter;