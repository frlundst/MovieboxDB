import React from 'react';
import './css/App.css';
import {} from './js/firebaseLoad';
import HomePresenter from './js/presenter/homePresenter.js';
import NavigationbarPresenter from './js/presenter/navigationbarPresenter.js';
import SearchPresenter from './js/presenter/searchPresenter';
import Show from './js/presenter/showPresenter.js';
import MovieDetailsPresenter from './js/presenter/movieDetailsPresenter.js';
import LoginPresenter from './js/presenter/loginPresenter';
import DiscoverPresenter from './js/presenter/discoverPresenter.js';
import MovieMatcherPresenter from './js/presenter/movieMatcherPresenter.js'
import FooterPresenter from './js/presenter/footerPresenter.js';
import NotificationPresenter from './js/presenter/notificationPresenter.js';
import EditProfilePresenter from './js/presenter/editProfilePresenter.js';

function defaultRoute() {
  	if (["#home", "#search", "#favourites", "#watchlist", '#movieDetails', '#movieMatcher', '#login', '#profile', '#editProfile', '#discover']
	  		.find((knownRoute) => knownRoute !== window.location.hash)){
      	window.location.hash = "#home";
  	}
}

function App(props) {
  	return (
		defaultRoute(),
		window.addEventListener("hashchange", defaultRoute()),
		<div className="App">
			<NavigationbarPresenter/>
			<Show hash="#home"><HomePresenter model={props.model}/></Show>
			<Show hash="#movieDetails"><MovieDetailsPresenter model={props.model}/></Show>
			<Show hash="#search"><SearchPresenter model={props.model}/></Show>
			<Show hash="#discover"><DiscoverPresenter model={props.model}/></Show>
			<Show hash="#movieMatcher"><MovieMatcherPresenter model={props.model}/></Show>
			<Show hash="#login"><LoginPresenter model={props.model}/></Show>
			<Show hash="#editProfile"><EditProfilePresenter model={props.model}/></Show>
			<NotificationPresenter model={props.model}/>
			<FooterPresenter/>
		</div>
	);
}

export default App;
