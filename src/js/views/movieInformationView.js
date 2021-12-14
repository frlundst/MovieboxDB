import React from "react";
import { filterTextLength } from "../model";
import "../../css/movieDetails.css";

function MovieInformationView(props) {
    return (
        <div className="movie-details-summary">
            <div className="movie-details-grid">
                <h2>CATEGORY</h2>
                <p>{props.movie.genres.map(genre => genre.name).join(", ")}</p>
            </div>
            <div className="movie-details-grid">
                <h2>STORYLINE</h2>
                <p>{filterTextLength(props.movie.overview)}</p>
            </div>
        </div>
    );
}

export default MovieInformationView;
