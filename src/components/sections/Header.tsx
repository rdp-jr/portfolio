import React, { useState } from "react";
import { Icons } from "../Icons";

export const Header = () => {
  const [whaleImageIndex, setWhaleImageIndex] = useState(1);
  return (
    <div>
      <h1>
        <span>Hello there</span>, I'm Roberto Principio Jr
      </h1>

      <img src={`/img/whale-${whaleImageIndex}.webp`} />

      <div>
        <Icons />

        <div>
          <a
            href="#section-project"
            id="a-check"
            onMouseLeave={() => setWhaleImageIndex(1)}
            onMouseEnter={() => setWhaleImageIndex(2)}
          >
            CHECK OUT MY WORK <i></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
