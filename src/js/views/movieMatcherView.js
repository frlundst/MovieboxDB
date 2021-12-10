import React from "react";
import '../../css/movieMatcherView.css';
import TinderCard from 'react-tinder-card';

function MovieMatcherView(props) {
    const [lastDirection, setLastDirection] = React.useState();
    
    const swiped = (direction, id) => {
        console.log('removing: ' + id)
        setLastDirection(direction)
        props.model.setCurrentMovie(id);
        window.location.hash="#movieDetails";
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div className="movieMatcher-section">
        <div className='cardContainer'>
            <h3 className="title">MoiveMatcher™</h3>
            <h5 className="description">Swipe right to add movie to watchlist. Swipe up to add movie to favourites. Swipe down for more information. Swipe left for no.</h5>
            <br/>
            {props.topMovies.results.map(
                function (movie) {
                    if (movie.poster_path == null) {
                        return null;
                    } else {
                        return (
                            <TinderCard className="swipe" key={movie.id} onSwipe={(dir) => props.onSwipe(dir, movie.id)} onCardLeftScreen={() => outOfFrame(movie.id)}>
                                <div className="card">
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} ></img>
                                </div>
                            </TinderCard>
                        );
                    }
                }
            )}
            {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
        </div>
        </div>
    );
}

export default MovieMatcherView;