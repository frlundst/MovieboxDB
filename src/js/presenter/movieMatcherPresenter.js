import React from 'react';
import MovieMatcherView from '../views/movieMatcherView.js';
import promiseNoData from '../promiseNoData.js';
import { ApiFetch } from '../apiFetch.js';

function MovieMatcherPresenter(props){
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    const swiped = (direction, id) => {
        console.log(direction + ", " + id)
        switch (direction){
            case "left":
                break;
            case "right":
                break;
            case "up":
                break;
            case "down":
                props.model.setCurrentMovie(id);
                window.location.hash="#movieDetails";
                break;
        }
    }

    React.useEffect(() => {
        setPromise(ApiFetch.getTopMovies()
            .then(data => setData(data))
            .catch(error => setError(error)));
    }, []);

    return(
        <div>
            {promiseNoData(promise, data, error) || <MovieMatcherView 
                topMovies={data}
                onSwipe={(direction,id) => swiped(direction, id)}
        ></MovieMatcherView>}
        </div>
    );
}

export default MovieMatcherPresenter;