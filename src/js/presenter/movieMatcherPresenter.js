import React from 'react';
import MovieMatcherView from '../views/movieMatcherView.js';
import promiseNoData from '../promiseNoData.js';
import { ApiFetch } from '../apiFetch.js';
import { useNavigate } from "react-router-dom";

function MovieMatcherPresenter(props){
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [bottom, setBottom] = React.useState(false);
    const [nextPage, setNextPage] = React.useState(2);
    let navigate = useNavigate();
    var counter = 0;

    const swiped = (direction, movie) => {
        if(counter >= 20){
            setNextPage(nextPage + 1);
            fetchMoreData();
        }
        switch (direction){
            case "left":
                break;
            case "right":
                props.model.addToFavorite(movie, false);
                break;
            case "up":
                props.model.addMovieToWatchlist(movie, false);
                break;
            case "down":
                props.model.setCurrentMovie(movie.id);
                navigate(`/movieDetails`);
                break;
            default:
                break;
        }
    }

    function fetchMoreData(){
        setPromise(
            ApiFetch.discoverMovie("popularity.desc", 10, 1, nextPage)
                .then((newData) => {
                    if(newData.results.length > 0){
                        setData(data.concat(newData.results));
                        counter = 0;
                    }else{
                        setBottom(bottom);
                    }
                })
                .catch((error) => setError(error))
        );
    }

    React.useEffect(() => {
        setPromise(ApiFetch.discoverMovie("popularity.desc", 10, 1)
            .then(data => {
                setData(data.results);
            })
            .catch(error => setError(error)));
    }, []);

    return(
        <div>
            {promiseNoData(promise, data, error) || <MovieMatcherView 
                topMovies={data}
                onSwipe={(direction,movie) => {
                    counter++;
                    swiped(direction, movie);
                }}
        ></MovieMatcherView>}
        </div>
    );
}

export default MovieMatcherPresenter;