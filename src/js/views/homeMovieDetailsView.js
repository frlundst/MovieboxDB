import React from "react";
import "../../css/homeMovieDetails.css";
import { filterTextLength } from "../model";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faPlus, faStar, faInfoCircle, faHeart} from '@fortawesome/free-solid-svg-icons'

function HomeMovieDetailsView(props) {
    return (
        <div className="movie-details-section">
            <div className="movie-details-info">
                <div className="movie-details-title">
                    <h1>{props.movieDetails.title}</h1>
                    <hr className="style"></hr>
                </div>
                <div className="movie-details-description">
                    <div className="movie-details-rating">
                        <p><FontAwesomeIcon icon={faStar} color="#EBDE8E"/>{` ${props.movieDetails.vote_average}`}</p>
                    </div>
                    
                    <div className="movie-details-runtime">
                        <p> <FontAwesomeIcon icon={faClock} color="#EBDE8E"/>{` ${props.movieDetails.runtime} min`}</p>
                    </div>
                    <div className="movie-details-genre">
                        <p>{props.movieDetails.genres.map(genre => genre.name).join(", ")}</p>
                    </div>
                </div>
                <div className="movie-details-overview">
                    <p>{filterTextLength(props.movieDetails.overview, 350)}</p>
                    <button className="movie-details-button-watch" onClick={() => props.addToWatchlist(props.movieDetails)}>
                        <FontAwesomeIcon icon={faPlus} size="lg"/> ADD LIST
                    </button>
                    <button className="movie-details-button-watch" onClick={() => props.readMore(props.movieDetails.id)}>
                        <FontAwesomeIcon icon={faInfoCircle} size="lg" /> READ MORE
                    </button>
                    <button className="movie-details-button-watch" onClick={() => props.addToFavorite(props.movieDetails)}>
                        <FontAwesomeIcon icon={faHeart} size="lg" /> ADD FAVORITES
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
    );
}

export default HomeMovieDetailsView;
