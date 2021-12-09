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
    const [movieID, setMovieID] = React.useState(null);
    const [MovieDetailsData, setMovieDetailsData] = React.useState(null);
    const [MovieDetailsError, setMovieDetailsError] = React.useState(null);

    const [SimilarMoviesData, setSimilarMoviesData] = React.useState(null);
    const [SimilarMoviesError, setSimilarMoviesError] = React.useState(null);

    const [MovieVideosData, setMovieVideosData] = React.useState(null);
    const [MovieVideosError, setMovieVideosError] = React.useState(null);

    const [MovieCreditsData, setMovieCreditsData] = React.useState(null);
    const [MovieCreditsError, setMovieCreditsError] = React.useState(null);

    React.useEffect(() => {
        const obs = () => {
            setMovieID(props.model.currentMovie);
            setMovieDetailsData(props.model.movieDetails);
            setMovieDetailsError(props.model.movieDetailsError);
            setSimilarMoviesData(props.model.similarMovies);
            setSimilarMoviesError(props.model.similarMoviesError);
            setMovieVideosData(props.model.movieVideos);
            setMovieVideosError(props.model.movieVideosError);
            setMovieCreditsData(props.model.movieCredits);
            setMovieCreditsError(props.model.movieCreditsError);
        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, []);

    return (
        <div>
            {promiseNoData(movieID, MovieDetailsData, MovieDetailsError) ||
                <MovieDetails
                    movie={MovieDetailsData}
                />
            }

            {promiseNoData(movieID, MovieCreditsData, MovieCreditsError) || (
                <MovieCredits
                    movie={MovieCreditsData}
                />
            )}

            {promiseNoData(movieID, MovieVideosData, MovieVideosError) || (
                <MovieVideos
                    movie={MovieVideosData}
                />
            )}

            {promiseNoData(movieID, SimilarMoviesData, SimilarMoviesError) || (
                <SimilarMovies
                    movies={SimilarMoviesData.results}
                />
            )}
        </div>
    );
}

export default MovieDetailsPresenter;
