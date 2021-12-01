import React from 'react';
import './css/App.css';
import HomePresenter from './js/homePresenter.js';
import NavigationbarPresenter from './js/navigationbarPresenter.js';

function App() {
  return (
    <div className="App">
      <NavigationbarPresenter/>
      <HomePresenter />
    </div>
  );
}

export default App;
