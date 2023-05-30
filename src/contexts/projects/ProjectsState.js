import React from "react";
import ProjectsContext from "./projectsContext";

import projects from "./projects";

const ProjectsState = function (props) {
  return (
    <ProjectsContext.Provider
      value={{
        projects,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsState;
