import React from "react";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight castShadow position={[-8, 16, -8]} intensity={0.5} />
      <pointLight position={[0, 50, 0]} intensity={2} />
    </>
  );
};

export default Lights;
