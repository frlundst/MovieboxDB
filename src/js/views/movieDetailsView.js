import React from 'react';
import '../../css/movieDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faPlus, faStar} from '@fortawesome/free-solid-svg-icons'

function MovieDetails(props) {
    return (console.log(props),
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
                    <h2>STORYLINE</h2>
                    <p>{props.movie.overview}</p>
                </div>
                <div className="movie-details-grid">
                    <h2>CATEGORY</h2>
                    <p>{props.movie.genres.map(genre => genre.name).join(", ")}</p>
                </div>
                <div className="movie-details-grid">
                    <h2>STORYLINE</h2>
                    <p>{props.movie.overview}</p>
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

function SimilarMovies(props) {
    return (console.log(props.movie),
        <div></div>
    );
}

function MovieVideos(props) {
    return (
        console.log(props.movie),
        (
            <div className="movie-videos-container">
                <div className="movie-details-video">
                    {props.movie.results.slice(0, 3).map((video) => (
                        <div className="movie-details-video-content" key={video.key}>
                            <iframe
                                width="450"
                                height="250"
                                src={`https://www.youtube.com/embed/${video.key}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    );
}

function MovieCredits(props) {
    return (
        console.log(props.movie),
        (
            <div className="movie-credits-container">
                <div className="movie-details-credits">
                    {props.movie.cast.slice(0, 3).map((cast) => (
                        <div className="movie-details-credits-content" key={cast.id}>
                            <img src={`https://image.tmdb.org/t/p/w185/${cast.profile_path}`} alt="Movie Poster" />
                            <p>{cast.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    );
}

export { MovieDetails, SimilarMovies, MovieVideos, MovieCredits };
