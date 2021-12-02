import React from "react";
import "../../css/homeMovieDetailsView.css";

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
                            <p>{`⭐${props.movieDetails.vote_average}`}</p>
                        </div>
                        
                        <div className="movie-details-runtime">
                            <p>{`🕒${props.movieDetails.runtime} min`}</p>
                        </div>
                        <div className="movie-details-genre">
                            <p>{props.movieDetails.genres.map(genre => genre.name).join(", ")}</p>
                        </div>
                    </div>
                    <div className="movie-details-overview">
                        <p>{props.movieDetails.overview}</p>
                    </div>
                </div>
                <div className="movie-details-release">
                    <p>{`Release Date: ${props.movieDetails.release_date}`}</p>
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
                        ) : (
                            ""
                        )
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

export default HomeMovieDetailsView;
