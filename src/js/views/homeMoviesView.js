import React from "react";
import "../../css/homeMoviesView.css";

function HomeMoviesView(props) {
    return (
        console.log(props.movies),
        (
            <div className="top-movies-section">
                {props.movies.slice(0, 12).map(function (movie) {
                    return (
                        <div className="movie-card" key={movie.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div className="movie-vote">
                                <p>{movie.vote_average ? `⭐${movie.vote_average}` : "⠀"}</p>
                            </div>
                            <div className="movie-card-info">
                                <h3>{movie.title}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    );
}

export default HomeMoviesView;
