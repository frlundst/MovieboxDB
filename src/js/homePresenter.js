import React from "react";
import { ApiFetch } from "./apiFetch";
import promiseNoData from "./promiseNoData";
import HomeImageView from "./views/homeImageView";
import HomeMoviesView from "./views/homeMoviesView";

function HomePresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setPromise(
            ApiFetch.getTopMovies()
                .then((data) => setData(data))
                .catch((error) => setError(error))
        );
    }, []);

    return (
        <div>
            <HomeImageView />
            {promiseNoData(promise, data, error) || (
                <HomeMoviesView movies={data.results} />
            )}
        </div>
    );
}

export default HomePresenter;
