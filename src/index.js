import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { Model } from './js/model.js';
import persistModel from './js/persistModel.js';

const model = new Model();
// persistModel(model);

ReactDOM.render(
  <React.StrictMode>
    <App model={model}/>
  </React.StrictMode>,
  document.getElementById('root')
);
