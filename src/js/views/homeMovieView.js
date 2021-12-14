import React from "react";
import "../../css/homeMoviesView.css";

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

export default HomeMoviesView;
