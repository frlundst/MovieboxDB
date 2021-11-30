import React from 'react';
import './css/App.css';
import {ApiFetch} from './js/apiFetch';
import HomeView from './js/views/homeView';

function App() {
  return (
    <div className="App">
      <HomeView />
    </div>
  );
}

export default App;
