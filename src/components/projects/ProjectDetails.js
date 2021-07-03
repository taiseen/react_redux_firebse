import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ProjectDetails = (props) => {

    document.title = "Project Details";

    //console.log(props)
    const { userAuth } = props;
    if (!userAuth.uid) return <Redirect to='/signin' />

    const { content, title, authorFirstName, authorLastName } = props.location.state;

    // const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{title} </span>
                    <p>{content}</p>
                </div>

                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by {authorFirstName} {authorLastName}</div>
                    <div>2nd Jun, 2021</div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        userAuth: state.firebaseAuth.auth
    }
}

export default connect(mapStateToProps)(ProjectDetails);