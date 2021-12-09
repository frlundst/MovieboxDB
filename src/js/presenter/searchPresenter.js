import React from 'react';
import SearchFormView from '../views/searchFormView.js';
import SearchResultsView from '../views/searchResultsView.js';
import promiseNoData from '../promiseNoData.js';
import { ApiFetch } from '../apiFetch.js';

function SearchPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    var query = "";
    
    React.useEffect(() => {
        setPromise(ApiFetch.getTopMovies()
            .then(data => setData(data))
            .catch(error => setError(error)));
    }, []);

    return (
        <div>
            <SearchFormView 
                onText={text => query = text}
                onSearch={() => {
                    setData(null);
                    setError(null);
                    setPromise(
                        ApiFetch.searchMovie(query)
                            .then((data) => setData(data))
                            .catch((error) => setError(error))
                    );
                }}
            ></SearchFormView>
            {promiseNoData(promise, data, error) || <SearchResultsView 
                searchResults={data}
            ></SearchResultsView>}
        </div>
    );
}

export default SearchPresenter;