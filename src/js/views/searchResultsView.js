import React from 'react';
import "../../css/searchResultsView.css";


function SearchResultsView(props) {
    console.log(props.searchResults.results);
    return (
        <div className="movies-container">
            {props.searchResults.results.map(function (result) {
                if (result.poster_path == null) {
                    return;
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
    );
}

export default SearchResultsView;