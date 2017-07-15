import React from 'react';
import ReactDOM from 'react-dom';
import getData from './actions';
import App from './containers/App/App';
import './index.css';

const actions = { getData };

ReactDOM.render(<App actions={actions} />, document.getElementById('root'));
