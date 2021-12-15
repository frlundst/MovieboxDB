import React from 'react';
import '../../css/discoverResultsView.css';

function DiscoverResultsView(props) {
    return (
        <div className='discover-results-section'>
            <div className="discover-movies-container">
                {props.discoverResults.map(
                    function (movie) {
                        if (movie.poster_path == null) {
                            return null;
                        } else {
                            return (
                                <div id={movie.id} className="movie-card" key={movie.id}>
                                    <img id={movie.id}
                                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                        alt={movie.title}

                                    />
                                    <div id={movie.id} className="movie-card-info">
                                        <h3 id={movie.id}>{movie.title}</h3>
                                        <p id={movie.id}>{movie.release_date}</p>
                                    </div>
                                </div>
                            );
                        }
                    }
                )}
            </div>
        </div>
    );
}

export default DiscoverResultsView;