import React from "react";
import Heading from "../../common/Heading";
import ProjectItem from "./ProjectItem";

function Projects({ t }) {
  const projectItem = t("ProjectsPage.projectItem", { returnObjects: true });
  return (
    <div className="project-main">
      <Heading
        heading={t("ProjectsPage.heading")}
        textSec={t("ProjectsPage.textSec")}
        smHeading={t("ProjectsPage.smHeading")}
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
