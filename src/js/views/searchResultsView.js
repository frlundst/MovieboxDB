import React from 'react';

function SearchResultsView(props){
    console.log(props.searchResults.results);
    return(
        <div>
            {props.searchResults.results.map(
                function (result){
                    return(
                        <span>
                            {result.original_title} AND
                        </span>
                    );
                }
            )}
        </div>
    );
}

export default SearchResultsView;