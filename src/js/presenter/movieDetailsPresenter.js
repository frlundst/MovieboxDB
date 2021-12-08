import React from "react";
import { ApiFetch } from "../apiFetch";
import promiseNoData from "../promiseNoData";
import {
    MovieDetails,
    SimilarMovies,
    MovieVideos,
    MovieCredits
} from "../views/movieDetailsView";

function MovieDetailsPresenter(props) {
    const [promiseMovieDetails, setMovieDetails] = React.useState(null);
    const [MovieDetailsData, setMovieDetailsData] = React.useState(null);
    const [MovieDetailsError, setMovieDetailsError] = React.useState(null);

    const [promiseSimilarMovies, setSimilarMovies] = React.useState(null);
    const [SimilarMoviesData, setSimilarMoviesData] = React.useState(null);
    const [SimilarMoviesError, setSimilarMoviesError] = React.useState(null);

    const [promiseMovieVideos, setMovieVideos] = React.useState(null);
    const [MovieVideosData, setMovieVideosData] = React.useState(null);
    const [MovieVideosError, setMovieVideosError] = React.useState(null);

    const [promiseMovieCredits, setMovieCredits] = React.useState(null);
    const [MovieCreditsData, setMovieCreditsData] = React.useState(null);
    const [MovieCreditsError, setMovieCreditsError] = React.useState(null);

    React.useEffect(() => {
        setMovieDetails(
            ApiFetch.getMovieDetails()
                .then((data) => setMovieDetailsData(data))
                .catch((error) => setMovieDetailsError(error))
        );
        
        // setMovieVideos(
        //     ApiFetch.getMovieVideos()
        //         .then((data) => setMovieVideosData(data))
        //         .catch((error) => setMovieVideosError(error))
        // );

        setMovieCredits(
            ApiFetch.getMovieCredits()
                .then((data) => setMovieCreditsData(data))
                .catch((error) => setMovieCreditsError(error))
        );

        // setSimilarMovies(
        //     ApiFetch.getSimilarMovies()
        //         .then((data) => setSimilarMoviesData(data))
        //         .catch((error) => setSimilarMoviesError(error))
        // );

    }, []);

    return (
        <div>
            {promiseNoData(promiseMovieDetails, MovieDetailsData, MovieDetailsError) ||
                <MovieDetails
                    movie={MovieDetailsData}
                />
            }

            {promiseNoData(promiseSimilarMovies, SimilarMoviesData, SimilarMoviesError) || (
                <SimilarMovies
                    movie={SimilarMoviesData}
                />
            )}

            {promiseNoData(promiseMovieVideos, MovieVideosData, MovieVideosError) || (
                <MovieVideos
                    movie={MovieVideosData}
                />
            )}

            {promiseNoData(promiseMovieCredits, MovieCreditsData, MovieCreditsError) || (
                <MovieCredits
                    movie={MovieCreditsData}
                />
            )}
        </div>
    );
}

export default MovieDetailsPresenter;
