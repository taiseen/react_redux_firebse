
const ProjectDetails = (props) => {

    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque architecto vero veritatis, voluptatum quisquam dolorum.</p>
                </div>

                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by Taiseen</div>
                    <div>2nd Jun, 2021</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;