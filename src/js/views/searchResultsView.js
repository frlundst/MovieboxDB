import React from 'react';
import "../../css/searchResultsView.css";

function SearchResultsView(props) {
    return (
            <div className="search-movies-container">
                {props.searchResults.map(function (result) {
                    if (result.poster_path == null || result.backdrop_path == null) {
                        return null;
                    } else {
                        return (
                            <div id={result.id} className="movie-card" key={result.id}>
                                <img id={result.id}
                                    src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                                    alt={result.title}
                                    onClick={() => props.onClick(result.id)}
                                />
                                <div id={result.id} className="movie-card-info">
                                    <h3 id={result.id}>{result.title}</h3>
                                    <p id={result.id}>{result.release_date}</p>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
    );
}

export default SearchResultsView;