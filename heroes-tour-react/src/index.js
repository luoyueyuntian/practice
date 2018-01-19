import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import allReducer from './rootReducer';
import defaultState from './defaultState';

import Home from './home';


const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(combineReducers({
    ...allReducer,
    router: routerReducer
}), defaultState, applyMiddleware(middleware));

ReactDOM.render(
    <Provider store={store}>
	 <ConnectedRouter history={history}>
		 <Home />
	  </ConnectedRouter>
	</Provider>,
    document.getElementById('root'));
registerServiceWorker();