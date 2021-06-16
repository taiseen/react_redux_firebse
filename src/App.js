import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import PageNotFound from './components/PageNotFound';
import Dashboard from './components/dashboard/Dashboard';

// 17-Jun-2021
// after finish ==>> attach output-ui

const App = () => {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </Router>
    );
};

export default App;