import React from 'react';
import "../../css/homeUsView.css";
import "../../css/homeMoviesView.css";
import "../../css/homeMovieDetailsView.css";
import '../../css/homeImageView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faPlus, faStar, faInfoCircle} from '@fortawesome/free-solid-svg-icons'

function HomeImageView(props) {
    return (
        <div className="intro-section">
            <img src="/images/batmanHomePage.jpg" alt="Batman Home Page" />
            <div className="intro-text">
                <h1>MovieBoxDB</h1>
                <p>Movie Tracking Application</p>
            </div>
        </div>
    );
}

function HomeMoviesView(props) {
    return (
        <div className={`top-movies-section`}>
            <h1 className={props.heading ? "movie-heading" : ""}>{props.heading}</h1>
            <div className="top-movies-container">
                {props.movies.slice(props.startIndex, props.endIndex).map(function (movie) {
                    return (
                        <div className="movie-card" key={movie.id}>
                            <div className="movie-vote">
                                <p>{movie.vote_average ? `${movie.vote_average}` : "?"}</p>
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

function HomeMovieDetailsView(props) {
    return (
        console.log(props.movieDetails),
        (
            <div className="movie-details-section">
                <div className="movie-details-info">
                    <div className="movie-details-title">
                        <h1>{props.movieDetails.title}</h1>
                        <hr className="style"></hr>
                    </div>
                    <div className="movie-details-description">
                        <div className="movie-details-rating">
                            <p><FontAwesomeIcon icon={faStar} color="#EBDE8E"/>{`${props.movieDetails.vote_average}`}</p>
                        </div>
                        
                        <div className="movie-details-runtime">
                            <p> <FontAwesomeIcon icon={faClock} color="#EBDE8E"/>{`${props.movieDetails.runtime} min`}</p>
                        </div>
                        <div className="movie-details-genre">
                            <p>{props.movieDetails.genres.map(genre => genre.name).join(", ")}</p>
                        </div>
                    </div>
                    <div className="movie-details-overview">
                        <p>{props.movieDetails.overview}</p>
                        <button className="movie-details-button-watch">
                            <FontAwesomeIcon icon={faPlus} size="lg"/> ADD LIST
                        </button>
                        <button className="movie-details-button-watch" onClick={() => props.readMore(props.movieDetails.id)}>
                            <FontAwesomeIcon icon={faInfoCircle} size="lg" /> READ MORE
                        </button>
                    </div>
                </div>
                <div className="movie-details-release">
                    <p><FontAwesomeIcon icon={faCalendarAlt} color="#EBDE8E"/>{` Release Date: ${props.movieDetails.release_date}`}</p>
                </div>

                <div className="movie-details-close">
                    <button onClick={props.closeMovieDetails}> × </button>
                </div>
            
                <div className="movie-details-companies">
                    {props.movieDetails.production_companies.map(company => (
                        company.logo_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                                alt={company.name}
                                key={company.name}
                            />
                        ) : ("")
                    ))}
                </div>

                <div className="movie-details-img">
                    <img
                        src={`https://image.tmdb.org/t/p/original/${props.movieDetails.backdrop_path}`}
                        alt={props.movieDetails.title}
                        />
                </div>
            </div>
        )
    );
}

function HomeUsView(props) {
    return (
        <div class="us-section">
            <div className="us-container">
                <div className="us-text">
                    <h3>Discover & track your favorite movies and Tv-shows</h3>
                    <p>
                        Track, save and discover all your favourite Tv-shows
                        and movies. At MovieBoxDB we offer the best discovery
                        experience when it comes to your favourite Tv-shows and movies.
                        Join today and start discovering your new favourite shows!
                    </p>
                </div>
                <img src="/images/justiceLeague.jpg" alt="Batman Home Page" />
            </div>
        </div>
    );
}

export {HomeImageView, HomeMoviesView, HomeMovieDetailsView, HomeUsView};
