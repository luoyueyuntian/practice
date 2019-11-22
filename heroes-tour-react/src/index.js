import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import reducer from './redux/reducer';
import defaultState from './defaultState';

import Home from './home';
import { initUnuesdCrisisId, initUnuesdHeroId, initUnuesdMessageId } from './service';

//初始化未使用的id
initUnuesdHeroId(defaultState.heroes);
initUnuesdCrisisId(defaultState.crisisLibary);
initUnuesdMessageId(defaultState.msgs);


const store = createStore(
    reducer,
    defaultState,
    compose(
        applyMiddleware( thunkMiddleware)
    ));

ReactDOM.render(
    <Provider store={store}>
        <Home />
	</Provider>,
    document.getElementById('root'));
registerServiceWorker();