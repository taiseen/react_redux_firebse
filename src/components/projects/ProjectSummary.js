const ProjectSummary = ({ project }) => {

    const { title, content } = project;
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{title}</span>
                <p>{content}</p>
                <p>Posted by the Net Ninja</p>
                <div className="grey-text">3rd September, 2am </div>
            </div>
        </div>
    );
};

export default ProjectSummary;