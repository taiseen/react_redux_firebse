
const ProjectDetails = (props) => {

    //console.log(props)

    const { content, title, authorFirstName, authorLastName } = props.location.state;

    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <p>{id}</p>
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

export default ProjectDetails;