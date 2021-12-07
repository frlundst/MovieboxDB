import React from 'react';
import './css/App.css';
import HomePresenter from './js/presenter/homePresenter.js';
import NavigationbarPresenter from './js/presenter/navigationbarPresenter.js';
import SearchPresenter from './js/presenter/searchPresenter';
import Show from './js/presenter/showPresenter.js';

function defaultRoute() {
  if (["#home", "#search", "#favourites", "watchlist"].find((knownRoute) => knownRoute !== window.location.hash)){
       window.location.hash = "#home";
  }
}

function App() {
  return (
    defaultRoute(),
    window.addEventListener("hashchange", defaultRoute()),
    <div className="App">
      <NavigationbarPresenter/>
      <Show hash="#home"><HomePresenter/></Show>
      <Show hash="#search"><SearchPresenter/></Show>
    </div>
  );
}

export default App;
