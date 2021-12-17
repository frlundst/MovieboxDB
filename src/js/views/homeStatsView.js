import React from "react";
import '../../css/homeStats.css';

function HomeStatsView(props) {
    return (
        <div className="stats-section">
            <div className="stats-container">
                <div className="website-stats">
                    <h1>Across all the current users on MovieBoxDB, these are the numbers of movies that have been either added to favorites or the watchlist.</h1>
                    <div className="favorite-stats">
                        <h3>Favorite: {props.favoriteMovieCount}</h3>
                    </div>
                    <div className="watchlist-stats">
                        <h3>Watchlist: {props.watchlistMovieCount}</h3>
                    </div>
                </div>
                <img src="/images/bright.png" alt="Avatar Home Page" />
            </div>
        </div>
    );
}

export default HomeStatsView;
