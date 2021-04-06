import React from 'react'
import { Canvas } from 'react-three-fiber'
// import { OrbitControls } from "drei"
import './styles/room.css'
function Box() {
    return (
        <mesh>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    )
}
export default function Room() {
    return (
        <Canvas className="canvas">
            {/* <OrbitControls /> */}
            <Box />
        </Canvas>
    )
}
