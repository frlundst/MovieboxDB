import React from 'react';
import SearchFormView from '../views/searchFormView.js';
import SearchResultsView from '../views/searchResultsView.js';
import promiseNoData from '../promiseNoData.js';
import { ApiFetch } from '../apiFetch.js';

function SearchPresenter(props) {
    // const [promise, setPromise] = React.useState(null);
    // const [data, setData] = React.useState(null);
    // const [error, setError] = React.useState(null);
    
    // const [nextPage, setNextPage] = React.useState(null);
    // const [isFetching, setIsFetching, stop] = useInfiniteScroll(getMoreFeed);
    // var query = "";

    // async function getMoreFeed() {
    //     if (nextPage) {
    //         setPromise(
    //             ApiFetch.searchMovie(query, page)
    //                 .then((newData) => {
    //                     setData([...data, ...newData]);
    //                     setIsFetching(false);
    //                     setNextPage(nextPage + 1)
    //                 })
    //                 .catch((error) => setError(error))
    //         );

    //       //const res = await apiCall({ method: "GET", page: nextPage });
    //       //if (res === 500) {
    //       //  SetAPIError(500);
    //       //} else {
    //       //  setData([...data, ...res.data]);
    //       //  setIsFetching(false);
    //       //  res.next
    //       //    ? setNextPage(nextPage + 1)
    //       //    : setNextPage(null)((stop.current = true));
    //       //}
    //     } else {
    //       setIsFetching(false);
    //     }
    // }

    // React.useEffect(() => {
    //     setPromise(ApiFetch.getTopMovies()
    //         .then(data => setData(data))
    //         .catch(error => setError(error)));
    // }, []);

    return (
        <div>
            {/* <SearchFormView 
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
            ></SearchResultsView>} */}
        </div>
    );
}

export default SearchPresenter;