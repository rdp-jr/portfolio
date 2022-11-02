import React from "react";
import { Tag } from "../Tag";

export const TechStack = () => {
  return (
    <section id="section-project">
      <h2>
        <span>
          <i></i>
          TECH
        </span>{" "}
        <span>STACK</span>
      </h2>
      <div>
        <div>
          <div>
            <h3>
              {" "}
              <i></i>Frontend
            </h3>
            <Tag name="html5-plain" />
            <Tag name="css3-plain" />
            <Tag name="javascript-plain" />
            <Tag name="bootstrap-plain" />
            <Tag name="jquery-plain" />
            <Tag name="react-original" />
          </div>
          <div>
            <h3>
              <i></i>Backend
            </h3>
            <Tag name="python-plain" />
            <Tag name="php-plain" />
            <Tag name="laravel-plain" />
            <Tag name="nodejs-plain" />
            <Tag name="express-original" />
            <Tag name="flask-original" />
            <Tag name="mysql-plain" />
            <Tag name="sqlalchemy-plain" />
          </div>

          <div>
            <h3>
              <i></i>Tools
            </h3>
            <Tag name="git-plain" />
            <Tag name="heroku-plain" />
            <Tag name="visualstudio-plain" />
            <Tag name="npm-original-wordmark" />
            <Tag name="composer-line" />
          </div>
        </div>
      </div>
    </section>
  );
};
