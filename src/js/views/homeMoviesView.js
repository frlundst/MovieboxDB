import React from "react";
import "../../css/homeMoviesView.css";

function HomeMoviesView(props) {
    return (
        console.log(props.movies),
        (
            <div className="top-movies-section">
                <h1>Top Movies</h1>
                <div className="top-movies-container">
                    {props.movies.slice(0, 6).map(function (movie) {
                        return (
                            <div className="movie-card" key={movie.id}>
                                <div className="movie-vote">
                                    <p>{movie.vote_average ? `${movie.vote_average}` : "?"}</p>
                                </div>
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <div className="movie-card-info">
                                    <h3>{movie.title}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    );
}

export default HomeMoviesView;
