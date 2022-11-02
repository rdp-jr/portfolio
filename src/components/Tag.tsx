import React from "react";

export const Tag = ({ name }: { name: string }) => {
  return (
    <span>
      <i className={`devicon-${name}`} />
      <span>{name.toUpperCase().split("-")[0]}</span>
    </span>
  );
};
