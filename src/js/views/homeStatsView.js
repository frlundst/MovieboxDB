import React from "react";
import '../../css/homeStats.css';

function HomeStatsView(props) {
    return (console.log(props),
        <div className="us-section">
            <div className="us-container">
                <div className="website-stats">
                    <h1>Across all the current users on MovieBoxDB, these are the numbers of movies that have been either added to favourites or the watchlist.</h1>
                    <div className="favorite-stats">
                        <h3>Favorite: {props.favoriteMovieCount}</h3>
                    </div>
                    <div className="watchlist-stats">
                        <h3>Watchlist: {props.watchlistMovieCount}</h3>
                    </div>
                </div>
                <img src="/images/avatar.png" alt="Avatar Home Page" />
            </div>
        </div>
    );
}

export default HomeStatsView;
