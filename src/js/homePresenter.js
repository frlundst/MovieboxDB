import React, { useRef } from "react";
import { ApiFetch } from "./apiFetch";
import promiseNoData from "./promiseNoData";
import promiseNoRender from "./promiseNoRender";

import HomeImageView from "./views/homeImageView";
import HomeMoviesView from "./views/homeMoviesView";
import HomeMovieDetailsView from "./views/homeMovieDetailsView.js";
import '../css/homeMoviesView.css';

const scrollToRef = (ref) => {
    setTimeout(
        () =>
            window.scrollTo({
                top: ref.current.offsetTop,
                left: 0,
                behavior: "smooth",
            }),
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

    const movieDetails = useRef(null);
    const executeScroll = () => scrollToRef(movieDetails)

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
        </div>
    );
}

export default HomePresenter;
