import React from 'react';
import './css/App.css';
import {ApiFetch} from './js/apiFetch';

function App() {
  return (
    <div className="App">
      {console.log(ApiFetch.discoverMovie())}
    </div>
  );
}

export default App;
