import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import axios from 'axios';
// import reducers from './reducers';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://13.238.155.215/api';

const allStoreEnhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension()
)
// console.log('REDUCERS;',reducers);

const store = createStore(reducers, allStoreEnhancers);

// console.log('STORE',store); 
sagaMiddleware.run(rootSaga);



ReactDOM.render(<Provider store={store}>

  <Router history={history}>
    <App />
  </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
