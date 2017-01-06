import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'

import allReducers from './reducers/';
import App from './components/App';
import './index.css';

const createStoreWithMiddleware = applyMiddleware( promise )( createStore );

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware( allReducers ) }>
    <App />
  </Provider>,
  document.getElementById('root')
);
