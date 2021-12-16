import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { Model } from './js/model.js';

const model = new Model();

ReactDOM.render(
  	<React.StrictMode>
      	<App model={model}/>
    </React.StrictMode>,
    document.getElementById('root')
);
