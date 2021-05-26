import React, { useState, useEffect, useRef, forwardRef } from "react";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

export default forwardRef(function Box({ position, color, size }, ref) {
    return (
        <a.mesh position={position}>
            <boxBufferGeometry attach='geometry' args={size} />
            <a.meshStandardMaterial
                roughness={0.5}
                attach='material'
                color={color}
            />
        </a.mesh>
    );
});
