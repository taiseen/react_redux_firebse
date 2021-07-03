import React, { Component } from 'react';
import Notifications from './Notifications'; // child --> 1
import ProjectList from '../projects/ProjectList'; // child --> 2
import { connect } from 'react-redux'; // binding layer of redux with react
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {

    render() {
        const { projects, userAuth } = this.props;

        // user যদি login করে না থাকে, তাকে login page এ পাঠাও 
        // if (!userAuth.uid) return <Redirect to='/signin' />

        // user যদি login করে থাকে, তাকে home page এ পাঠাও 
        return (
            <div className="dashboard container">
                <div className="row">

                    {/* Project List */}
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>

                    {/* Notifications List */}
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}
// a function which ==> map our Store To Props
const mapStateToProps = (state) => {

    return { // Object ==> which property are attach to props
        // projects: state.project.projects
        projects: state.firestore.ordered.projects,
        userAuth: state.firebaseAuth.auth
    } // componentState.rootRed.projectReducer
};
// Higher Order Component | which return ==> Dashboard Component
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard);