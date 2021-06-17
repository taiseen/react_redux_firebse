import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import PageNotFound from './components/PageNotFound';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

// 17-Jun-2021
// after finish ==>> attach output-ui

const App = () => {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/project/:id" component={ProjectDetails} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/create" component={CreateProject} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </Router>
    );
};

export default App;