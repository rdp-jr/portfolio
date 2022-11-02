import React from "react";
import { Icons } from "../Icons";

export const Footer = () => {
  return (
    <footer>
      <h5>
        Connect with me at
        <a href="mailto:rdprincipio.jr@gmail.com">
          <u>rdprincipio.jr@gmail.com</u>
        </a>
      </h5>
      <Icons />
      <small>
        Copyright &copy; {new Date().getFullYear()} Roberto Principio Jr
      </small>
    </footer>
  );
};
