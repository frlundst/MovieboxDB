import React from "react";
import promiseNoRender from "../promiseNoRender.js";
import ProfileView from "../views/profileView.js";

function ProfilePresenter(props) {
    const [user, setUser] = React.useState(props.model.profile);
    const [watchlistMovies, setWatchlistMovies] = React.useState(props.model.watchlistMovies);

    React.useEffect(() => {
        const obs = () => {
            setUser(props.model.profile);
            setWatchlistMovies(props.model.watchlistMovies);
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
                />
            }
        </div>
    );    
}

export default ProfilePresenter;
