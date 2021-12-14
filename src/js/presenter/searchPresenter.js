import React from 'react';
import SearchFormView from '../views/searchFormView.js';
import SearchResultsView from '../views/searchResultsView.js';
import promiseNoData from '../promiseNoData.js';
import { ApiFetch } from '../apiFetch.js';

function SearchPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [currentData, setCurrentData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [page, setPage] = React.useState(1);
    const [currentPage, setCurrentPage] = React.useState(1);
    var query = "";
    var state = true;

    React.useEffect(() => {
        setPromise(ApiFetch.getTopMovies()
            .then(data => setData(data))
            .catch(error => setError(error)));
    }, []);

    const fetchMoreData = () => {
        if(state === true){
            state=false;
            setCurrentData(data);
            setCurrentPage(page);
            console.log(currentPage + " hej");
            setPage(currentPage + 1);
            fetchData();
            setData({...currentData, ...data});
            
        }
    };

    const fetchData = () => {
        setData(null);
        setError(null);
        setPromise(null);
        setPromise(
            ApiFetch.searchMovie(query, page)
                .then((data) => setData(data))
                .catch((error) => setError(error))
        );
      }

    return (
        <div>
            <SearchFormView 
                onText={text => query = text}
                onSearch={() => {
                    setData(null);
                    setError(null);
                    setPromise(
                        ApiFetch.searchMovie(query, page)
                            .then((data) => setData(data))
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
                bottomReached={() => fetchMoreData()}
            ></SearchResultsView>}
        </div>
    );
}

export default SearchPresenter;