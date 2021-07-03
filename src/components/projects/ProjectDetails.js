import moment from 'moment';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';

const ProjectDetails = (props) => {
    document.title = "Project Details";

    const { post, userAuth } = props;

    if (!userAuth.uid) return <Redirect to='/signin' />

    // const { content, title, authorFirstName, authorLastName, createdAt } = props.location.state;


    if (post) {
        
        const { content, title, authorFirstName, authorLastName, createdAt } = post;
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{title} </span>
                        <p>{content}</p>
                    </div>

                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by {authorFirstName} {authorLastName}</div>
                        <div>{moment(createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="red-text center">Loading...</div>
        );
    }
};

const mapStateToProps = (state, idProps) => {

    const id = idProps.match.params.id;
    const posts = state.firestore.data.projects;
    const post = posts ? posts[id] : null;

    return {
        post: post,
        userAuth: state.firebaseAuth.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);