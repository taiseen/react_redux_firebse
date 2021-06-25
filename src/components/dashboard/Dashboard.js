import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';



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

const mapStateToProps = (state) => {
    return {
        projects: state.projects.project
    }
};

export default connect(mapStateToProps)(Dashboard);