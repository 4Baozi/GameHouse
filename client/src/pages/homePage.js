import React from "react";
import { Frame } from "../components";
import landingData from "../fixtures/landingpage.json";

export default function HomePage() {
  return (
    <div>
      {landingData.map((data, index) => {
        if (index % 2 === 0)
          return <Frame key={index} data={data} reverse={true} />;

        return <Frame key={index} data={data} reverse={false} />;
      })}
    </div>
  );
}
