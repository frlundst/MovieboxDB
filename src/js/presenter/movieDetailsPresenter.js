import React from "react";
import promiseNoData from "../promiseNoData";
import MovieDetailsView from "../views/movieDetailsView";
import MovieCreditsView from "../views/movieCreditsView";
import MovieInformationView from "../views/movieInformationView";
import SimilarMoviesView from "../views/movieSimilarView";
import MovieVideosView from "../views/movieVideosView";
import { useNavigate } from "react-router-dom";

function MovieDetailsPresenter(props) {
    const [movieID, setMovieID] = React.useState(props.model.currentMovie);
    const [MovieDetailsData, setMovieDetailsData] = React.useState(props.model.movieDetails);
    const [MovieDetailsError, setMovieDetailsError] = React.useState(props.model.movieDetailsError);

    const [MovieVideosData, setMovieVideosData] = React.useState(props.model.movieVideos);
    const [MovieVideosError, setMovieVideosError] = React.useState(props.model.movieVideosError);
    
    const [MovieCreditsData, setMovieCreditsData] = React.useState(props.model.movieCredits);
    const [MovieCreditsError, setMovieCreditsError] = React.useState(props.model.movieCreditsError);
    
    const [SimilarMoviesData, setSimilarMoviesData] = React.useState(props.model.similarMovies);
    const [SimilarMoviesError, setSimilarMoviesError] = React.useState(props.model.similarMoviesError);
    
    let navigate = useNavigate();
    window.scrollTo(0, 0);

    React.useEffect(() => {
        const obs = () => {
            setMovieID(props.model.currentMovie);
            setMovieDetailsData(props.model.movieDetails);
            setMovieDetailsError(props.model.movieDetailsError);
            setMovieVideosData(props.model.movieVideos);
            setMovieVideosError(props.model.movieVideosError);
            setMovieCreditsData(props.model.movieCredits);
            setMovieCreditsError(props.model.movieCreditsError);
            setSimilarMoviesData(props.model.similarMovies);
            setSimilarMoviesError(props.model.similarMoviesError);
        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, [props.model]);

    return (
        <div>
            {promiseNoData(movieID, MovieDetailsData, MovieDetailsError) ||
                <MovieDetailsView
                    movie={MovieDetailsData}
                    addToWatchlist={(id) => props.model.addMovieToWatchlist(id, true, navigate)}
                    addToFavorite={(movieInformation) => {
                        props.model.addToFavorite(movieInformation, true, navigate);
                    }}
                />
            }

            <div className="movie-details-content">
                {promiseNoData(movieID, MovieDetailsData, MovieDetailsError) ||
                    <MovieInformationView
                        movie={MovieDetailsData}
                    />
                }

                {promiseNoData(movieID, MovieCreditsData, MovieCreditsError) || (
                    <MovieCreditsView
                        movie={MovieCreditsData}
                    />
                )}
            </div>

            {promiseNoData(movieID, MovieVideosData, MovieVideosError) || (
                <MovieVideosView
                    movie={MovieVideosData}
                />
            )}

            {promiseNoData(movieID, SimilarMoviesData, SimilarMoviesError) || (
                <SimilarMoviesView
                    movies={SimilarMoviesData.results}
                    onClick={(movieID) => {
                        props.model.setCurrentMovie(movieID);
                        navigate(`/movieDetails`);
                    }}
                />
            )}
        </div>
    );
}

export default MovieDetailsPresenter;
