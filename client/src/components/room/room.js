import React from 'react'
import { Canvas } from 'react-three-fiber'

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
        <div>
            <Box />
        </div>
    )
}
