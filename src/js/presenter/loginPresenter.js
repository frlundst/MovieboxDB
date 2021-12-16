import React from "react";
import LoginView from "../views/loginView";
import promiseNoRender from "../promiseNoRender.js";
import ProfileView from "../views/profileView.js";
import { useNavigate } from "react-router-dom";

function LoginPresenter(props) {
    const [signIn, setSignIn] = React.useState(true);
    const [user, setUser] = React.useState(props.model.profile);
    const [watchlist, setWatchlist] = React.useState(props.model.watchlistMovies);
    const [favorite, setFavorite] = React.useState(props.model.favoriteMovies);
    const [isSignedIn, setIsSignedIn] = React.useState(props.model.isLoggedIn());
    let navigate = useNavigate();
    var email = "hej";
    var password = "lol";

    React.useEffect(() => {
        const obs = () => {
            setUser(props.model.profile);
            setWatchlist(props.model.watchlistMovies);
            setFavorite(props.model.favoriteMovies);
            setIsSignedIn(props.model.isLoggedIn());
        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, [props.model]);
    
    return (
        <div>
            {isSignedIn ?
                promiseNoRender('', user, null) ||
                <ProfileView
                    user={user}
                    watchlistMovies={watchlist}
                    favoriteMovies={favorite}
                    movieDetails={(id) => {
                        props.model.setCurrentMovie(id);
                        navigate(`/movieDetails`);
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
                    editProfile={() => {
                        navigate(`/editProfile`);
                    }}
                    logout={() => {
                        props.model.signOutUser();
                        navigate(`/`);
                    }}
                />

                :

                <LoginView
                    setEmail={text => email = text}
                    setPassword={text => password = text}
                    createUser={() => {
                        props.model.createUser(email, password)
                    }}
                    loginUser={() => {
                        props.model.loginUser(email, password)
                    }}
                    signIn={signIn}
                    login={() => setSignIn(true)}
                    signUp={() => setSignIn(false)}
                />
            }
        </div>
    );
}

export default LoginPresenter;
