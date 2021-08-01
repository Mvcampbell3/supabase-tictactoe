import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={LoginPage} />
            </Switch>
        </Router>
    );
};

export default Routes;
