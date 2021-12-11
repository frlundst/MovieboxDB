import React from "react";
import promiseNoData from "../promiseNoData";
import { MovieDetails, SimilarMovies, MovieVideos, MovieCredits, MovieInformation } from "../views/movieDetailsView";

function MovieDetailsPresenter(props) {
    const [movieID, setMovieID] = React.useState(props.model.currentMovie);
    const [MovieDetailsData, setMovieDetailsData] = React.useState(props.model.movieDetails);
    const [MovieDetailsError, setMovieDetailsError] = React.useState(props.model.movieDetailsError);

    const [SimilarMoviesData, setSimilarMoviesData] = React.useState(props.model.similarMovies);
    const [SimilarMoviesError, setSimilarMoviesError] = React.useState(props.model.similarMoviesError);

    const [MovieVideosData, setMovieVideosData] = React.useState(props.model.movieVideos);
    const [MovieVideosError, setMovieVideosError] = React.useState(props.model.movieVideosError);

    const [MovieCreditsData, setMovieCreditsData] = React.useState(props.model.movieCredits);
    const [MovieCreditsError, setMovieCreditsError] = React.useState(props.model.movieCreditsError);

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
    }, [props.model]);

    return (
        <div>
            {promiseNoData(movieID, MovieDetailsData, MovieDetailsError) ||
                <MovieDetails
                    movie={MovieDetailsData}
                    addToWatchlist={(id) => props.model.addMovieToWatchlist(id)}
                />
            }
            <div className="movie-details-content">
                {promiseNoData(movieID, MovieDetailsData, MovieDetailsError) ||
                    <MovieInformation
                        movie={MovieDetailsData}
                    />
                }

                {promiseNoData(movieID, MovieCreditsData, MovieCreditsError) || (
                    <MovieCredits
                        movie={MovieCreditsData}
                    />
                )}
            </div>

            {promiseNoData(movieID, MovieVideosData, MovieVideosError) || (
                <MovieVideos
                    movie={MovieVideosData}
                />
            )}

            {promiseNoData(movieID, SimilarMoviesData, SimilarMoviesError) || (
                <SimilarMovies
                    movies={SimilarMoviesData.results}
                    onClick={(movieID) => {
                        props.model.setCurrentMovie(movieID);
                        window.location.hash="#movieDetails";
                    }}
                />
            )}
        </div>
    );
}

export default MovieDetailsPresenter;
