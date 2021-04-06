import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from "@react-three/drei"
import { Physics, useBox, usePlane } from "@react-three/cannon"

import * as THREE from "three"
import './styles/room.css'

function Box() {
    const [ref, api] = useBox(() => ({
        mass: 1,
        position: [0, 5, 0],
    }))
    return (
        <mesh
            onClick={() => api.velocity.set(0, 5, 0)}
            ref={ref}
            position={[0, 5, 0]}
            rotation={[0, 1, 0]}
        >
            <boxBufferGeometry
                attach="geometry"
                args={[1, 2, 2]}
            />
            <meshStandardMaterial
                attach="material"
                color="hotpink"
            />
        </mesh>
    )
}

function Plane() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
    }))

    return (
        // ref={ref} position={[0, 0, 0]}
        <mesh
            rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry
                attach="geometry"
                args={[100, 100]}
            />
            <meshLambertMaterial
                attach="material"
                color="lightblue"
            />
        </mesh>
    )
}
export default function Room() {
    return (
        <Canvas className="canvas">
            <OrbitControls />
            <Stars />
            <ambientLight intensity={0.5} />
            <spotLight
                position={[10, 15, 10]}
                angle={0.3}
            />
            <Physics>
                <Box />
                <Plane />
            </Physics>
        </Canvas>
    )
}
