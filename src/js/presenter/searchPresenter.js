import React from 'react';
import SearchFormView from '../views/searchFormView.js';
import SearchResultsView from '../views/searchResultsView.js';
import promiseNoData from '../promiseNoData.js';
import { ApiFetch } from '../apiFetch.js';
import { useNavigate } from "react-router-dom";

function SearchPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [query, setQuery] = React.useState("Marvel");

    let navigate = useNavigate();

    React.useEffect(() => {
        setPromise(ApiFetch.searchMovie("Marvel")
            .then(data => {
                setData(data.results);
            })
            .catch(error => setError(error)));
    }, []);

    return (
        <div>
            <SearchFormView
                onText={text => {
                    setQuery(text)
                }}
                onSearch={() => {
                    setData(null);
                    setError(null);
                    setPromise(
                        ApiFetch.searchMovie(query)
                            .then((data) => setData(data.results))
                            .catch((error) => setError(error))
                    );
                }}
            />
            {promiseNoData(promise, data, error) || <SearchResultsView
                searchResults={data}
                onClick={(id) => {
                    props.model.setCurrentMovie(id);
                    navigate(`/movieDetails`);
                }}
            />}
        </div>
    );
}

export default SearchPresenter;