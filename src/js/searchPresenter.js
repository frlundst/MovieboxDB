import React from 'react';
import SearchFormView from './views/searchFormView.js';

function SearchPresenter(props) {
    return (
        <div>
            <SearchFormView options={["action", "drama"]}></SearchFormView>
        </div>
    );
}

export default SearchPresenter;