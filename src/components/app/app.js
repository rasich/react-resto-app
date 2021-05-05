import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {
    BrowserRouter as Router,
    Switch,
    Route
    } from "react-router-dom";
import Error from '../error'

import Background from './food-bg.jpg';

const App = () => {
    return (
        <Router>
            <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
                <AppHeader/>
                <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/cart" component={CartPage}/>
                <Route path="/*" component={Error}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;