import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';

class NavigationBar extends Component {
    render() {
        return (
            <NavigationContainer class="navbar navbar-default" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span class="sr-only"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <span className="navbar-brand">Nguyen Tai Tieu</span>
                    </div>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            <li><NavItem to="/">Home</NavItem></li>
                            <li><NavItem to="/projects">Projects</NavItem></li>
                            <li><NavItem to="/about-me">About me</NavItem></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="https://github.com/tieunt97" target="_blank"><i className="fa fa-github fa-2x"></i></a></li>
                        </ul>
                    </div>
                </div>
            </NavigationContainer>
        );
    }
}

export default NavigationBar;