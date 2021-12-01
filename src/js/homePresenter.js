import React from "react";
import { ApiFetch } from "./apiFetch";
import promiseNoData from "./promiseNoData";

import HomeImageView from "./views/homeImageView";
import HomeMoviesView from "./views/homeMoviesView";
import HomeMovieDetailsView from "./views/homeMovieDetailsView.js";

function HomePresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [promiseDetailsMovie, setPromiseDetailsMovie] = React.useState(null);
    const [dataDetailsMovie, setDataDetailsMovie] = React.useState(null);
    const [errorDetailsMovie, setErrorDetailsMovie] = React.useState(null);

    React.useEffect(() => {
        setPromise(
            ApiFetch.getTopMovies()
                .then((data) => setData(data))
                .catch((error) => setError(error))
        );

        setPromiseDetailsMovie(
            ApiFetch.getMovieDetails('566525')
                .then((data) => {setDataDetailsMovie(data)})
                .catch((error) => setErrorDetailsMovie(error))
        );
    }, []);

    return (
        <div>
            <HomeImageView />
            {promiseNoData(promise, data, error) || (
                <HomeMoviesView
                    movies={data.results}
                    onClick={(id) => {
                        setPromiseDetailsMovie(
                            ApiFetch.getMovieDetails(id)
                                .then((data) => {setDataDetailsMovie(data)})
                                .catch((error) => setErrorDetailsMovie(error))
                        );
                    }}
                />
            )}
            {promiseNoData(promiseDetailsMovie, dataDetailsMovie, errorDetailsMovie) || (
                <HomeMovieDetailsView
                    movieDetails={dataDetailsMovie}
                />
             )}
        </div>
    );
}

export default HomePresenter;
