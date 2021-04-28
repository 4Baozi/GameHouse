import React from "react";
import { Frame } from "../components";
import landingData from "../fixtures/landingpage.json";
import ReactGlobe from 'react-globe.gl';
import '../../src/components/globe/styles/globe.css';
import Globe from '../../src/components/globe/globe.js'
export default function HomePage() {
  return (
    <div>
      {landingData.map((data, index) => {
        if (index % 2 === 0)
          return <Frame key={index} data={data} reverse={true} />;

        return <Frame key={index} data={data} reverse={false} />;
      })}
      <div className="globe">
          <Globe/>
      </div>
    </div>
  );
}
