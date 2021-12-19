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
    const [lastDirection, setLastDirection] = React.useState(null)
    
    let navigate = useNavigate();
    var counter = 0;

    const swiped = (direction, movie) => {
        console.log(direction);
        if(counter >= 20){
            setNextPage(nextPage + 1);
            fetchMoreData();
        }
        switch (direction){
            case "left":
                break;
            case "right":
                props.model.addMovieToWatchlist(movie, false, navigate);
                break;
            case "up":
                props.model.addToFavorite(movie, false, navigate);
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
        let isMounted = true;
        setPromise(ApiFetch.discoverMovie("popularity.desc", 10, 1)
            .then(data => {
                if(isMounted) setData(data.results);
            })
            .catch(error => setError(error)));
        return () => isMounted = false;
    }, []);

    return(
        <div>
            {promiseNoData(promise, data, error) || <MovieMatcherView 
                lastDirection={lastDirection}
                topMovies={data}
                increaseCounter={() => counter++}
                onSwipe={(direction,movie) => {
                    counter++;
                    swiped(direction, movie);
                    switch(direction){
                        case "left":
                            setLastDirection("Movie skipped");
                            break;
                        case "right":
                            setLastDirection(movie.title + " added to watchlist");
                            break;
                        case "up":
                            setLastDirection(movie.title + " added to favorites");
                            break;
                        case "down":
                            setLastDirection("You swiped down");
                            break;
                        default:
                            break;
                    }
                }}
        ></MovieMatcherView>}
        </div>
    );
}

export default MovieMatcherPresenter;