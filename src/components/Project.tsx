import React from "react";
import { Project as IProject } from "../types";
import { Tag } from "./Tag";

export const Project = ({ details }: { details: IProject }) => {
  const { name, description, picture, urlView, urlCode, tech_list } = details;
  return (
    <div>
      <div>
        <h3>{name}</h3>

        <img src={picture} alt="" />
      </div>
      <div>
        <p>
          <i></i> DESCRIPTION
        </p>
        <p>{description}</p>

        {urlView && (
          <>
            <p>
              <i></i> LIVE PREVIEW
            </p>
            <a href={urlView} target="_noblank">
              <u>{urlView}</u>
            </a>
          </>
        )}

        {urlCode && (
          <>
            <p>
              <i></i> SOURCE CODE
            </p>
            <a href={urlCode} target="_noblank">
              <u>{urlCode}</u>
            </a>
          </>
        )}

        <p>
          {tech_list.map((tech) => (
            <Tag name={tech} key={tech} />
          ))}
        </p>
      </div>
    </div>
  );
};
