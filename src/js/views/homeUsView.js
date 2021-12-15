import React from 'react';
import "../../css/homeUsView.css";

function HomeUsView(props) {
    return (
        <div className="us-section">
            <div className="us-container">
                <div className="us-text">
                    <h3>Discover, save and track your favourite movies</h3>
                    <p>
                        At MovieBoxDB we offer the best tracking and discovery 
                        experience when it comes to movies.
                        Join today and find your new favourite movie!
                    </p>
                </div>
                <img src="/images/justiceLeague.jpg" alt="Batman Home Page" />
            </div>
        </div>
    );
}

export default HomeUsView;
