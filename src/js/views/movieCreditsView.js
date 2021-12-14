import React from "react";
import "../../css/movieDetails.css";

function MovieCreditsView(props) {
    return (
        <div className="">
            <div className="movie-details-grid">
                <h2>CAST</h2>
                <p>{props.movie.cast.slice(0, 5).map(cast => cast.name).join(", ")}</p>
            </div>
            <div className="movie-details-grid">
                <h2>CREW</h2>
                <p>{props.movie.crew.slice(0, 5).map(crew => crew.name).join(", ")}</p>
            </div>
        </div>
    );
}

export default MovieCreditsView;
