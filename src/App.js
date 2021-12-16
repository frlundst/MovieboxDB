import React from 'react';
import './css/App.css';
import { } from './js/firebaseLoad';

import HomePresenter from './js/presenter/homePresenter.js';
import NavigationbarPresenter from './js/presenter/navigationbarPresenter.js';
import SearchPresenter from './js/presenter/searchPresenter';
import MovieDetailsPresenter from './js/presenter/movieDetailsPresenter.js';
import LoginPresenter from './js/presenter/loginPresenter';
import DiscoverPresenter from './js/presenter/discoverPresenter.js';
import MovieMatcherPresenter from './js/presenter/movieMatcherPresenter.js'
import FooterPresenter from './js/presenter/footerPresenter.js';
import EditProfilePresenter from './js/presenter/editProfilePresenter.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App(props) {
	return (
		<Router>
			<div className="App">
				<NavigationbarPresenter />
				<Routes>
					<Route path="/" element={<HomePresenter model={props.model} />}></Route>
					<Route path="/movieDetails" element={<MovieDetailsPresenter model={props.model} />}></Route>
					<Route path="/search" element={<SearchPresenter model={props.model} />}></Route>
					<Route path="/discover" element={<DiscoverPresenter model={props.model} />}></Route>
					<Route path="/movieMatcher" element={<MovieMatcherPresenter model={props.model} />}></Route>
					<Route path="/login" element={<LoginPresenter model={props.model} />}></Route>
					<Route path="/editProfile" element={<EditProfilePresenter model={props.model} />}></Route>
				</Routes>
				<ReactNotification />
				<FooterPresenter />
			</div>
		</Router>
	);
}

export default App;
