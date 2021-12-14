import React from 'react';
import '../../css/homeImageView.css';

function HomeImageView(props) {
    return (
        <div className="intro-section">
            <img src="/images/HomePage.jpg" alt="Batman Home Page" />
            <div className="intro-text">
                <h1>MovieBoxDB</h1>
                <p>Movie Tracking Application</p>
            </div>
        </div>
    );
}

export default HomeImageView;
