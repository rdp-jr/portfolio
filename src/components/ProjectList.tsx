import React from "react";
import { Project } from "./Project";
import { Project as IProject } from "../types";
import { PROJECT_LIST } from "../data/projects";

export const ProjectList = () => {
  return (
    <div>
      {PROJECT_LIST.map((project: IProject) => (
        <Project details={project} key={project.name} />
      ))}
    </div>
  );
};
