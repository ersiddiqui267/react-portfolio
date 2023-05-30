import React, { useContext } from "react";
import ProjectsContext from "../../contexts/projects/projectsContext";

import ProjectItem from "./ProjectItem";

const Projects = function () {
  const projectsContext = useContext(ProjectsContext);
  const { projects } = projectsContext;

  return (
    <React.Fragment>
      <h1 className="intro text-6xl font-bold lg:px-16 xl:px-32">Projects</h1>
      <div className="mt-16 mb-4 lg:px-16 xl:px-32 sm:flex flex-wrap">
        {projects.map((project, i) => (
          <ProjectItem key={i} project={project} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Projects;
