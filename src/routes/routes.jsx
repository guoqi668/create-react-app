import App from '../App';
import Counter from '../pages/counter/counter'
import Login from '../pages/login';

import React, { Component } from 'react'
import {  BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/login' component={Login} />
                </Switch>
            </Router>
         )
    }
}

export default Routes;
