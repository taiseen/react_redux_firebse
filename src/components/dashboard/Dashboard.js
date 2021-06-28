import React, { Component } from 'react';
import Notifications from './Notifications'; // child --> 1
import ProjectList from '../projects/ProjectList'; // child --> 2
import { connect } from 'react-redux'; // binding layer of redux with react

class Dashboard extends Component {

    render() {
        const { projects } = this.props;

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
        projects: state.project.projects
    } // componentState.rootRed.projectReducer
};
// Higher Order Component | which return ==> Dashboard Component
export default connect(mapStateToProps)(Dashboard);