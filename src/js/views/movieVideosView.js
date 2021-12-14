import React from "react";
import "../../css/movieDetails.css";

function MovieVideosView(props) {
    return (
        <div className="movie-videos-container">
            <div className="movie-details-video">
                {props.movie.results.slice(0, 3).map((video) => (
                    <div className="movie-details-video-content" key={video.key}>
                        <iframe
                            title={video.name}
                            width="500"
                            height="280"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                            />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieVideosView;
