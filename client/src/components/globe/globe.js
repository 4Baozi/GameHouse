  import React from 'react'
  import Globe from 'react-globe.gl';

  const { useState, useEffect, useMemo } = React;

  const World = () => {
    const [rise, setRise] = useState(false);

    useEffect(() => {
      setTimeout(() => setRise(true), 6000);
    }, []);

    // Gen random paths
    const N_PATHS = 10;
    const MAX_POINTS_PER_LINE = 10000;
    const MAX_STEP_DEG = 1;
    const MAX_STEP_ALT = 0.015;
    const gData = useMemo(() => [...Array(N_PATHS).keys()].map(() => {
        let lat = (Math.random() - 0.5) * 90;
        let lng = (Math.random() - 0.5) * 360;
        let alt = 0;

        return [[lat, lng, alt], ...[...Array(Math.round(Math.random() * MAX_POINTS_PER_LINE)).keys()].map(() => {
          lat += (Math.random() * 2 - 1) * MAX_STEP_DEG;
          lng += (Math.random() * 2 - 1) * MAX_STEP_DEG;
          alt += (Math.random() * 2 - 1) * MAX_STEP_ALT;
          alt = Math.max(0, alt);

          return [lat, lng, alt];
        })];
      }),
      []
    );

    return <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      pathsData={gData}
      pathColor={() => ['#7FFFDD', '#8C69C1']}
      pathDashLength={0.01}
      pathDashGap={0.004}
      pathDashAnimateTime={100000}
      pathPointAlt={rise ? pnt => pnt[2] : undefined}
      pathTransitionDuration={rise ? 4000 : undefined}
      height={500}
      width={800}
      backgroundColor="#212226"
      animateIn={true}
    />;
  };

export default World;
