import React from 'react';
import './css/App.css';
import {} from './js/firebaseLoad';
import HomePresenter from './js/presenter/homePresenter.js';
import NavigationbarPresenter from './js/presenter/navigationbarPresenter.js';
import SearchPresenter from './js/presenter/searchPresenter';
import Show from './js/presenter/showPresenter.js';
import MovieDetailsPresenter from './js/presenter/movieDetailsPresenter.js';
import LoginPresenter from './js/presenter/loginPresenter';

function defaultRoute() {
  if (["#home", "#search", "#favourites", "#watchlist", '#movieDetails'].find((knownRoute) => knownRoute !== window.location.hash)){
       window.location.hash = "#login"; //TODO: CHANGE BACK TO #home
  }
}

function App() {
  return (
    defaultRoute(),
    window.addEventListener("hashchange", defaultRoute()),
    <div className="App">
      <NavigationbarPresenter/>
      <Show hash="#movieDetails"><MovieDetailsPresenter/></Show>
      {/* <Show hash="#home"><HomePresenter/></Show>*/}
      <Show hash="#login"><LoginPresenter/></Show>
    </div>
  );
}

export default App;
