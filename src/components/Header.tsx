import React, { useState } from "react";
import { Icons } from "./Icons";

export const Header = () => {
  const [whaleImageIndex, setWhaleImageIndex] = useState(1);
  return (
    <div>
      <h1>
        <span className="font-bold">Hello there</span>, I'm Roberto Principio Jr
      </h1>

      <h2>
        Call me <span>OBEE</span>!
      </h2>

      <h2>
        I'm a <span>SOFTWARE ENGINEER</span> based in the Philippines
      </h2>

      <h5>I'm an undergraduate student currently taking BS Computer Science</h5>
      <h5>
        in the <span>University of the Philippines Diliman</span>
      </h5>
      <h5>I love learning new technologies, piano pieces, and Japanese</h5>
      <h5>
        In my free time, I read books, watch anime, movies, series, and play
        games
      </h5>

      <div>
        <Icons />

        <div>
          <img
            id="splash-whale"
            src={`/img/whale-${whaleImageIndex}.webp`}
            alt=""
            onMouseEnter={() => setWhaleImageIndex(2)}
            onMouseLeave={() => setWhaleImageIndex(1)}
          />

          <a
            href="#section-project"
            id="a-check"
            onMouseEnter={() => setWhaleImageIndex(2)}
            onMouseLeave={() => setWhaleImageIndex(1)}
          >
            CHECK OUT MY WORK! <i></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
