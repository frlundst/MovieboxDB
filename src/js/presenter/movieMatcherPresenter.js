import React from 'react';
import MovieMatcherView from '../views/movieMatcherView.js';
import promiseNoData from '../promiseNoData.js';
import { ApiFetch } from '../apiFetch.js';

function MovieMatcherPresenter(props){
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setPromise(ApiFetch.getTopMovies()
            .then(data => setData(data))
            .catch(error => setError(error)));
    }, []);

    return(
        <div>
            {promiseNoData(promise, data, error) || <MovieMatcherView 
                topMovies={data}
                onSwipe={direction => whatToHappenOnSwipe(direction)}
        ></MovieMatcherView>}
        </div>
    );
}

function whatToHappenOnSwipe(direction){
    if(direction == "left")
    if(direction == "right")
    if(direction == "up")
    if(direction == "down");
}

export default MovieMatcherPresenter;