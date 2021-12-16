import React from 'react';
import "../../css/searchResults.css";

function SearchResultsView(props) {
    return (
        <div className='search-results-section'>
            <div className="search-movies-container">
                {props.searchResults.map(function (result) {
                    if (result.poster_path == null || result.backdrop_path == null ) {
                        return null;
                    } else {
                        return (
                            <div className="movie-card" key={result.id}>
                                <img 
                                    src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                                    alt={result.title}
                                    onClick={() => props.onClick(result.id)}
                                />
                                <div className="movie-card-info">
                                    <h3>{result.title}</h3>
                                    <p>{result.release_date}</p>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default SearchResultsView;