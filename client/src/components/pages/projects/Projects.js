import React from "react";
import Heading from "../../common/Heading";
import ProjectItem from "./ProjectItem";
import { projectItem } from "../../resources";

function Projects() {
  return (
    <div className="project-main">
      <Heading
        heading={"My"}
        textSec={"Projects"}
        smHeading={"This are some of my projects"}
      />
      <div className="project">
        {projectItem.map((project, i) => {
          return (
            <ProjectItem
              key={i}
              projectNumber={project.projectNumber}
              liveLocation={project.liveLocation}
              githubLocation={project.githubLocation}
              projectName={project.projectName}
              projectDetail={project.projectDetail}
              technologies={project.technologies}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
