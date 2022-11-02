import React from "react";
import { PROJECT_LIST } from "../../data/projects";
import { Project } from "../Project";
import { Project as IProject } from "../../types";

export const ProjectList = () => {
  return (
    <div>
      {PROJECT_LIST.map((project: IProject) => (
        <Project details={project} key={project.name} />
      ))}
    </div>
  );
};
