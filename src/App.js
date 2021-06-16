import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';

// 9-March-2021
// after finish ==>> attach output-ui

const App = () => {

    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;