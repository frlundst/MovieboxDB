import React from 'react';
import "../../css/homeUsView.css";

function HomeUsView(props) {
    return (
        <div className="us-section">
            <div className="us-container">
                <div className="us-text">
                    <h3>Discover & track your favorite movies and Tv-shows</h3>
                    <p>
                        Track, save and discover all your favourite Tv-shows
                        and movies. At MovieBoxDB we offer the best discovery
                        experience when it comes to your favourite Tv-shows and movies.
                        Join today and start discovering your new favourite shows!
                    </p>
                </div>
                <img src="/images/justiceLeague.jpg" alt="Batman Home Page" />
            </div>
        </div>
    );
}

export default HomeUsView;
