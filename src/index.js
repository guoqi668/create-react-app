import React from 'react';

import  {Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import counter from './pages/counter/reducer/counter';

import Routes from './routes/routes';

import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(combineReducers({counter:counter}));

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
