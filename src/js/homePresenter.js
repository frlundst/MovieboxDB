import React, { useRef } from "react";
import { ApiFetch } from "./apiFetch";
import promiseNoData from "./promiseNoData";
import promiseNoRender from "./promiseNoRender";

import HomeImageView from "./views/homeImageView";
import HomeMoviesView from "./views/homeMoviesView";
import HomeMovieDetailsView from "./views/homeMovieDetailsView.js";
import HomeMoviesViewSecond from "./views/homeMoviesViewSecond.js";
import HomeUsView from "./views/homeUsView.js";

const scrollToRef = (ref) => {
    setTimeout(
        () => {
            try {
            window.scrollTo({
                top: ref.current.offsetTop - 350,
                left: 0,
                behavior: "smooth",
            })
            } catch (error) {
                console.log(error);
            }},
        100
    );
};

function HomePresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [promiseDetailsMovie, setPromiseDetailsMovie] = React.useState(null);
    const [dataDetailsMovie, setDataDetailsMovie] = React.useState(null);
    const [errorDetailsMovie, setErrorDetailsMovie] = React.useState(null);

    const [promiseDetailsMovieSecond, setPromiseDetailsMovieSecond] = React.useState(null);
    const [dataDetailsMovieSecond, setDataDetailsMovieSecond] = React.useState(null);
    const [errorDetailsMovieSecond, setErrorDetailsMovieSecond] = React.useState(null);

    const movieDetails = useRef(null);
    const executeScroll = () => scrollToRef(movieDetails);

    const movieDetailsSecond = useRef(null);
    const executeScrollSecond = () => scrollToRef(movieDetailsSecond);

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
                <HomeMoviesView
                    movies={data.results}
                    onClick={(id) => {
                        setPromiseDetailsMovie(
                            ApiFetch.getMovieDetails(id)
                                .then((data) => {setDataDetailsMovie(data)})
                                .catch((error) => setErrorDetailsMovie(error))
                        );
                        executeScroll()
                    }}
                />
            )}

            {promiseNoRender(promiseDetailsMovie, dataDetailsMovie, errorDetailsMovie) || (
                <div ref={movieDetails}>
                    <HomeMovieDetailsView
                        movieDetails={dataDetailsMovie}
                        closeMovieDetails={() => {
                            setPromiseDetailsMovie(null);
                            setDataDetailsMovie(null);
                            setErrorDetailsMovie(null);
                        }}
                    />
                </div>
             )}

             {promiseNoData(promise, data, error) || (
                <HomeMoviesViewSecond
                    movies={data.results}
                    onClick={(id) => {
                        setPromiseDetailsMovieSecond(
                            ApiFetch.getMovieDetails(id)
                                .then((data) => {setDataDetailsMovieSecond(data)})
                                .catch((error) => setErrorDetailsMovieSecond(error))
                        );
                        executeScrollSecond()
                    }}
                />
            )}

            {promiseNoRender(promiseDetailsMovieSecond, dataDetailsMovieSecond, errorDetailsMovieSecond) || (
                <div ref={movieDetailsSecond}>
                    <HomeMovieDetailsView
                        movieDetails={dataDetailsMovieSecond}
                        closeMovieDetails={() => {
                            setPromiseDetailsMovieSecond(null);
                            setDataDetailsMovieSecond(null);
                            setErrorDetailsMovieSecond(null);
                        }}
                    />
                </div>
             )}

            <HomeUsView />
        </div>
    );
}

export default HomePresenter;
