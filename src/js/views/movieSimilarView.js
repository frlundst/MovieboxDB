import React from "react";
import "../../css/movieDetails.css";

function SimilarMoviesView(props) {
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

export default SimilarMoviesView;
