import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './containers/App/App';
import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';
import AboutMe from './containers/AboutMe/AboutMe';

export default (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" render={props => (
                    <App>
                        <Home />
                    </App>
                )} />
                <Route exact path="/projects" render={props => (
                    <App>
                        <Projects />
                    </App>
                )} />
                <Route exact path="/about-me" render={props => (
                    <App>
                        <AboutMe />
                    </App>
                )} />
            </Switch>
        </div>
    </Router>
);
