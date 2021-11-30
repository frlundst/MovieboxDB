import React from 'react';
import '../../css/homeView.css';

function HomeView(props) {
    return (
        <div className="intro-section">
            <img src="/images/batmanHomePage.jpg" alt="Melanie Jansen Pic" />
            <div className="intro-text">
                <h1>MovieBoxDB</h1>
                <p>Movie Tracking Application</p>
            </div>
        </div>
    );
}

export default HomeView;
