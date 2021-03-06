import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './Store/reducers/auth';
import './index.css';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhances(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();