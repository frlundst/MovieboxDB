import React from 'react';
import '../../css/movieDetails.css';
import '../../css/homeMoviesView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faPlus, faStar} from '@fortawesome/free-solid-svg-icons'

function MovieDetails(props) {
    return (
        <div className="movie-details">

            <div className="movie-details-intro">
                <h1>
                    {props.movie.title}
                </h1>
                <div className="movie-details-intro-content">
                    <div className="movie-details-intro-content-left">
                        <p>
                            <FontAwesomeIcon icon={faStar} size="lg" color="#EBDE8E"/> Rating: {props.movie.vote_average}
                        </p>
                    </div>
                    <div className="movie-details-intro-content-center">
                        <p>
                            <FontAwesomeIcon icon={faClock} size="lg" color="#EBDE8E"/> Duration: {props.movie.runtime} min
                        </p>
                    </div>
                    <div className="movie-details-intro-content-right">
                        <p>
                            <FontAwesomeIcon icon={faCalendarAlt} size="lg" color="#EBDE8E"/> Release: {props.movie.release_date}
                        </p>
                    </div>
                    <div className="movie-details-button">
                        <button className="movie-details-button-watch">
                            <FontAwesomeIcon icon={faPlus}/> ADD LIST
                        </button>
                    </div>
                </div>
            </div>

            <div className="movie-details-content">
                <div className="movie-details-grid">
                    <h2>CATEGORY</h2>
                    <p>{props.movie.genres.map(genre => genre.name).join(", ")}</p>
                </div>
                <div className="movie-details-grid">
                    <h2>STORYLINE</h2>
                    <p>{props.movie.overview}</p>
                </div>
            </div>

            <div className="movie-details-image">
                <img src={`https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`} alt="Movie Backdrop" />
            </div>
        </div>
    );
}


function MovieVideos(props) {
    return (
        <div className="movie-videos-container">
            <div className="movie-details-video">
                {props.movie.results.slice(0, 4).map((video) => (
                    <div className="movie-details-video-content" key={video.key}>
                        <iframe
                            title={video.name}
                            width="500"
                            height="280"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            />
                    </div>
                ))}
            </div>
        </div>
    );
}

function MovieCredits(props) {
    return (
        <div className="movie-credits-container">
            <div className="movie-details-cast">
                <h2>CAST</h2>
                <p>{props.movie.cast.slice(0, 5).map(cast => cast.name).join(", ")}</p>
            </div>
            <div className="movie-details-crew">
                <h2>CREW</h2>
                <p>{props.movie.crew.slice(0, 5).map(crew => crew.name).join(", ")}</p>
            </div>
        </div>
    );
}

function SimilarMovies(props) {
    return (
        <div className="similar-movies-section">
            <h1 className="similar-movies-header">More like this</h1>
            <div className="top-movies-container">
                {props.movies.slice(0, 6).map(function (movie) {
                    return (
                        <div className="movie-card" key={movie.id}>
                            <div className="movie-vote">
                                <p>{movie.vote_average ? `${movie.vote_average.toFixed(1)}` : "?"}</p>
                            </div>
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.title}
                                onClick={() => props.onClick(movie.id)}
                                />
                            <div className="movie-card-info">
                                <h3>{movie.title}</h3>
                                <p>{movie.release_date}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export { MovieDetails, SimilarMovies, MovieVideos, MovieCredits };
