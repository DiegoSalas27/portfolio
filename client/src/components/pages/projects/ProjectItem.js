import React from "react";

function ProjectItem(props) {
  return (
    <div className="project-info">
      <div className={`${props.projectNumber} img`}>
        <div className="overlay">
          <input
            type="button"
            className="btn btn-outline-light"
            value="Live"
            onClick={() => (window.location.href = props.liveLocation)}
          />
          <input
            type="button"
            className="btn btn-outline-light"
            value="Github"
            onClick={() => (window.location.href = props.githubLocation)}
          />
        </div>
      </div>

      <ul className="project-content">
        <h4>{props.projectName}</h4>
        <p className="project-detail">{props.projectDetail}</p>
        <p className="project-detail">{props.technologies}</p>
      </ul>
    </div>
  );
}

export default ProjectItem;
