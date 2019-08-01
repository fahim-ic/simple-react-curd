import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Employee from './Employee';
import Contact from './Contact';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/'} className="nav-link"> Home </Link></li>
                            <li><Link to={'/employee'} className="nav-link">Employee</Link></li>
                            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/employee' component={Employee} />
                        <Route path='/contact' component={Contact} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;