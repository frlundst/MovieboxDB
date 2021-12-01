import React from "react";
import "../../css/homeMovieDetailsView.css";

function HomeMovieDetailsView(props) {
    return (
        console.log(props.movieDetails),
        (
            <div className="movie-details-section">
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
