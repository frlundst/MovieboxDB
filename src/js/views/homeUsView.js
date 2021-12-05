import React from "react";
import "../../css/homeUsView.css";

function HomeUsView(props) {
    return (
        <div class="us-section">
            <div className="us-container">
                <div className="us-text">
                    <h3>Discover & track your favorite movies and Tv-shows</h3>
                    <p>
                        Track every TV show & movie you watch, automatically from
                        your favorite media center. We call this scrobbling. Keep
                        all your devices in sync, even across different apps. Get
                        started by installing the plugin and connecting your Trakt
                        account.
                    </p>
                </div>
                <img src="/images/justiceLeague.jpg" alt="Batman Home Page" />
            </div>
        </div>
    );
}

export default HomeUsView;
