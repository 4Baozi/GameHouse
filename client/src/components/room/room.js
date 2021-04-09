import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from "@react-three/drei"
import { Physics, useBox, usePlane } from "@react-three/cannon"
import * as THREE from "three"
import './styles/room.css'
import { Text, Box } from '../'

function Plane() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
    }))

    return (
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
        <div className="canvas-container">
            <Canvas camera={{
                position: [Math.PI * 2, 20, Math.PI * 2],
            }} >
                <Stars />
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <spotLight
                    position={[10, 15, 10]}
                    angle={0.3}
                />
                <Physics>
                    <Plane />
                    <Box />
                    <Text text={"Gamehouse"}
                        position={[0, 10, 0]} />
                    <Text text={"4 Baozi"}
                        position={[0, 5, 0]} />
                </Physics>
            </Canvas>
        </div>
    )
}
