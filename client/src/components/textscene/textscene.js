import React from 'react'
import { Box, Text } from '../'
// import Box from '../box/box'
// import Text from '../text/text'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from "@react-three/drei"

export default function TextScene() {
    return (
        <Canvas camera={{
            position: [5, 10, 1],
        }}>
            <OrbitControls />
             <ambientLight intensity={0.5} />
                <spotLight
                    position={[10, 15, 10]}
                    angle={0.3}
                />
            <Box />
            <Text text={"Hello world!"} />
        </Canvas>
    )
}
