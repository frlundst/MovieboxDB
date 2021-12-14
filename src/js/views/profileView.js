import React from "react";
import '../../css/profile.css';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

function ProfileView(props) {
    return (console.log(props.watchlistMovies),
        <div className="profile-container">
            <div className="profile-about">
                <div className="profile-about-header">
                    <h1>Profile</h1>
                </div>
                <div className="profile-about-body">
                    <p>{props.user[0]}</p>
                </div>
            </div>
            <div className="profile-movies">
                <div className="profile-favorite">
                    <div className="profile-favorite-header">
                        <h1>Favorite Movies</h1>
                    </div>
                    <div className="profile-favorite-body">
                        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                            {props.watchlistMovies.map(movie => (
                                <Card
                                    key={movie.id}
                                    itemId={movie.id}
                                    title={movie.title}
                                    image={movie.poster_path}
                                    props={props}
                                />
                            ))}
                        </ScrollMenu>
                    </div>
                </div>
                <div className="profile-watchlist">
                    <div className="profile-watchlist-header">
                        <h1>Watchlist</h1>
                    </div>
                    <div className="profile-watchlist-body">
                    </div>
                </div>
            </div>
        </div>
    );
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);
  
    return (
        <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            Left
        </button>
    );
}
  
function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  
    return (
        <button disabled={isLastItemVisible} onClick={() => scrollNext()}>
            Right
        </button>
    );
}

function Card({ itemId, title, image, key, props }) {
    const visibility = React.useContext(VisibilityContext)

    return (
        <div className="profile-favorite-movie"
            style={{
                
            }}
        >
            <img
                src={`https://image.tmdb.org/t/p/original/${image}`}
                alt={title}
                onClick={() => props.onClick(itemId)}
            />
            <div className="profile-favorite-info">
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default ProfileView;
