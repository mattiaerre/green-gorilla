import React from 'react';
import ReactDOM from 'react-dom';
import getData from './get-data';
import App from './containers/App/App';
import './index.css';

const url = window.location.href;
const matches = url.match(/morale=([^&]*)/);

const actions = { getData };

ReactDOM.render(
  <App actions={actions} morale={matches ? matches[1] : undefined} />,
  document.getElementById('root')
);
