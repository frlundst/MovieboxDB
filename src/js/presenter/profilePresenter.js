import React from "react";
import promiseNoRender from "../promiseNoRender.js";
import ProfileView from "../views/profileView.js";

function ProfilePresenter(props) {
    const [user, setUser] = React.useState(props.model.profile);
    const [watchlistMovies, setWatchlistMovies] = React.useState(props.model.watchlistMovies);
    const [favoriteMovies, setFavoriteMovies] = React.useState(props.model.favoriteMovies);

    React.useEffect(() => {
        const obs = () => {
            setUser(props.model.profile);
            setWatchlistMovies(props.model.watchlistMovies);
            setFavoriteMovies(props.model.favoriteMovies);
        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, [props.model]);

    return (
        <div>
            {promiseNoRender('', user, null) ||
                <ProfileView
                    user={user}
                    watchlistMovies={watchlistMovies}
                    favoriteMovies={favoriteMovies}
                    movieDetails={(id) => {
                        props.model.setCurrentMovie(id);
                        window.location.hash="#movieDetails";
                    }}
                    removeFromWatchlist={(id) => {
                        props.model.removeFromWatchlist(id);
                    }}
                    addToFavorite={(movieInformation) => {
                        props.model.addToFavorite(movieInformation);
                    }}
                    removeFromFavorite={(id) => {
                        props.model.removeFromFavorite(id);
                    }}
                />
            }
        </div>
    );    
}

export default ProfilePresenter;
