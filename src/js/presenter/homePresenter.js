import React, { useRef } from "react";
import { ApiFetch } from "../apiFetch";
import promiseNoData from "../promiseNoData";
import promiseNoRender from "../promiseNoRender";
import WindowDimensions from "../windowDimensions";
import { HomeImageView, HomeMoviesView, HomeMovieDetailsView, HomeUsView } from "../views/homeView";
// #TODO: Ask if multiple views should be stored in the same file

const scrollToRef = (ref) => {
    setTimeout(
        () => {
            try {
            window.scrollTo({
                top: ref.current.offsetTop - 200,
                left: 0,
                behavior: "smooth",
            })
            } catch (error) {
                console.log(error);
            }
        }, 0
    );
};

const scrollToList = (ref) => {
    setTimeout(
        () => {
            try {
            window.scrollTo({
                top: ref.current.offsetTop -150,
                left: 0,
                behavior: "smooth",
            })
            } catch (error) {
                console.log(error);
            }
        }, 0
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

    const [promiseRatedMovie, setPromiseRatedMovie] = React.useState(null);
    const [dataRatedMovie, setDataRatedMovie] = React.useState(null);
    const [errorRatedMovie, setErrorRatedMovie] = React.useState(null);

    const [promiseDetailsMovieRated, setPromiseDetailsMovieRated] = React.useState(null);
    const [dataDetailsMovieRated, setDataDetailsMovieRated] = React.useState(null);
    const [errorDetailsMovieRated, setErrorDetailsMovieRated] = React.useState(null);

    const [promiseRatedMovieSecond, setPromiseRatedMovieSecond] = React.useState(null);
    const [dataRatedMovieSecond, setDataRatedMovieSecond] = React.useState(null);
    const [errorRatedMovieSecond, setErrorRatedMovieSecond] = React.useState(null);

    const popularMovie = useRef(null);
    const popularMovieScroll = () => scrollToList(popularMovie);

    const popularMovieSecond = useRef(null);
    const popularMovieSecondScroll = () => scrollToRef(popularMovieSecond);

    const ratedMovie = useRef(null);
    const ratedMovieScroll = () => scrollToList(ratedMovie);

    const ratedMovieSecond = useRef(null);
    const ratedMovieSecondScroll = () => scrollToRef(ratedMovieSecond);

    const movieDetails = useRef(null);
    const executeScroll = () => scrollToRef(movieDetails);

    const movieDetailsSecond = useRef(null);
    const executeScrollSecond = () => scrollToRef(movieDetailsSecond);

    const movieDetailsThird = useRef(null);
    const executeScrollThird = () => scrollToRef(movieDetailsThird);

    const movieDetailsFourth = useRef(null);
    const executeScrollFourth = () => scrollToRef(movieDetailsFourth);

    const { width } = WindowDimensions();

    React.useEffect(() => {
        setPromise(
            ApiFetch.getTopMovies()
                .then((data) => setData(data))
                .catch((error) => setError(error))
        );

        setPromiseRatedMovie(
            ApiFetch.getTopRatedMovies()
                .then((data) => setDataRatedMovie(data))
                .catch((error) => setErrorRatedMovie(error))
        );
    }, []);

    return (
        <div>
            <HomeImageView />
            {promiseNoData(promise, data, error) || (
                <div ref={popularMovie}>
                    <HomeMoviesView
                        movies={data.results}
                        heading="Popular Movies"
                        startIndex={0}
                        endIndex={6}
                        onClick={(id) => {
                            if (width >= 1200) {
                            
                                setPromiseDetailsMovie(
                                    ApiFetch.getMovieDetails(id)
                                        .then((data) => {setDataDetailsMovie(data)})
                                        .catch((error) => setErrorDetailsMovie(error))
                                        .then(() => {executeScroll()})
                                );
                                
                            } else {
                                props.model.setCurrentMovie(id);
                                window.location.hash="#movieDetails";
                            }
                        }}
                    />
                </div>
            )}

            {promiseNoRender(promiseDetailsMovie, dataDetailsMovie, errorDetailsMovie) || (
                <div ref={movieDetails}>
                    <HomeMovieDetailsView
                        movieDetails={dataDetailsMovie}
                        closeMovieDetails={() => {
                            setPromiseDetailsMovie(null);
                            setDataDetailsMovie(null);
                            setErrorDetailsMovie(null);
                        
                            popularMovieScroll()
                        }}
                        readMore={(id) => {
                            props.model.setCurrentMovie(id);
                            window.location.hash="#movieDetails";
                        }}
                        addToWatchlist={(id) => props.model.addMovieToWatchlist(id)}
                    />
                </div>
             )}

             {promiseNoData(promise, data, error) || (
                <div ref={popularMovieSecond}>
                    <HomeMoviesView
                        movies={data.results}
                        heading=""
                        startIndex={6}
                        endIndex={12}
                        onClick={(id) => {
                            if (width >= 1200) {
                                setPromiseDetailsMovieSecond(
                                    ApiFetch.getMovieDetails(id)
                                        .then((data) => {setDataDetailsMovieSecond(data)})
                                        .catch((error) => setErrorDetailsMovieSecond(error))
                                        .then(() => {executeScrollSecond()})
                                );
                            } else {
                                props.model.setCurrentMovie(id);
                                window.location.hash="#movieDetails";
                            }                        
                        }}
                    />
                </div>
            )}

            {promiseNoRender(promiseDetailsMovieSecond, dataDetailsMovieSecond, errorDetailsMovieSecond) || (
                <div ref={movieDetailsSecond}>
                    <HomeMovieDetailsView
                        movieDetails={dataDetailsMovieSecond}
                        closeMovieDetails={() => {
                            setPromiseDetailsMovieSecond(null);
                            setDataDetailsMovieSecond(null);
                            setErrorDetailsMovieSecond(null);

                            popularMovieSecondScroll()
                        }}
                        readMore={(id) => {
                            props.model.setCurrentMovie(id);
                            window.location.hash="#movieDetails";
                        }}
                        addToWatchlist={(id) => props.model.addMovieToWatchlist(id)}
                    />
                </div>
             )}

            <HomeUsView />

            {promiseNoData(promiseRatedMovie, dataRatedMovie, errorRatedMovie) || (
                <div ref={ratedMovie}>
                    <HomeMoviesView
                        movies={dataRatedMovie.results}
                        heading="Top Rated Movies"
                        startIndex={0}
                        endIndex={6}
                        onClick={(id) => {
                            if (width >= 1200) {
                                setPromiseDetailsMovieRated(
                                    ApiFetch.getMovieDetails(id)
                                        .then((data) => {setDataDetailsMovieRated(data)})
                                        .catch((error) => setErrorDetailsMovieRated(error))
                                        .then(() => {executeScrollThird()})
                                );
                            } else {
                                props.model.setCurrentMovie(id);
                                window.location.hash="#movieDetails";
                            }
                        }}
                    />
                </div>
            )}

            {promiseNoRender(promiseDetailsMovieRated, dataDetailsMovieRated, errorDetailsMovieRated) || (
                <div ref={movieDetailsThird}>
                    <HomeMovieDetailsView
                        movieDetails={dataDetailsMovieRated}
                        closeMovieDetails={() => {
                            setPromiseDetailsMovieRated(null);
                            setDataDetailsMovieRated(null);
                            setErrorDetailsMovieRated(null);

                            ratedMovieScroll()
                        }}
                        readMore={(id) => {
                            props.model.setCurrentMovie(id);
                            window.location.hash="#movieDetails";
                        }}
                        addToWatchlist={(id) => props.model.addMovieToWatchlist(id)}
                    />
                </div>
             )}

             {promiseNoData(promiseRatedMovie, dataRatedMovie, errorRatedMovie) || (
                    <div ref={ratedMovieSecond}>
                    <HomeMoviesView
                        movies={dataRatedMovie.results}
                        heading=""
                        startIndex={6}
                        endIndex={12}
                        onClick={(id) => {
                            if (width >= 1200) {
                                setPromiseRatedMovieSecond(
                                    ApiFetch.getMovieDetails(id)
                                        .then((data) => {setDataRatedMovieSecond(data)})
                                        .catch((error) => setErrorRatedMovieSecond(error))
                                        .then(() => {executeScrollFourth()})
                                );
                            } else {
                                props.model.setCurrentMovie(id);
                                window.location.hash="#movieDetails";
                            }
                        }}
                    />
                </div>
            )}

            {promiseNoRender(promiseRatedMovieSecond, dataRatedMovieSecond, errorRatedMovieSecond) || (
                <div ref={movieDetailsFourth}>
                    <HomeMovieDetailsView
                        movieDetails={dataRatedMovieSecond}
                        closeMovieDetails={() => {
                            setPromiseRatedMovieSecond(null);
                            setDataRatedMovieSecond(null);
                            setErrorRatedMovieSecond(null);

                            ratedMovieSecondScroll()
                        }}
                        readMore={(id) => {
                            props.model.setCurrentMovie(id);
                            window.location.hash="#movieDetails";
                        }}
                        addToWatchlist={(id) => props.model.addMovieToWatchlist(id)}
                    />
                </div>
             )}
        </div>
    );
}

export default HomePresenter;
