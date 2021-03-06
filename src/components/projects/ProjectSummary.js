import moment from "moment";

const ProjectSummary = ({ project }) => {

    const { title, content, authorFirstName, authorLastName, createdAt } = project;
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{title}</span>
                <p className="mb-5">{content}</p>
                <p>Posted by the <strong>{authorFirstName} {authorLastName}</strong></p>
                <div className="grey-text">{moment(createdAt.toDate()).calendar()}</div>
            </div>
        </div>
    );
};

export default ProjectSummary;