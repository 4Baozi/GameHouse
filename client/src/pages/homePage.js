import React from "react";
import { Frame } from "../components";
import landingData from "../fixtures/landingpage.json";
import "../../src/components/globe/styles/globe.css";
import Globe from "../../src/components/globe/globe.js";
import Portal from "../images/portal.gif";

export default function HomePage() {
  return (
    <div>
      {landingData.map((data, index) => {
        if (index % 2 === 0)
          return <Frame key={index} data={data} reverse={true} />;

        return <Frame key={index} data={data} reverse={false} />;
      })}
      <div className="globe">
        <Globe />
      </div>

      <section>
        <img className="full-background" src={Portal} />
      </section>
    </div>
  );
}
