import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { Box } from "../";
import { PerspectiveCamera } from "@react-three/drei";
import "./styles/styles.css";

import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { MeshPhysicalMaterial } from "three";

function Plane() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
    }));

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshLambertMaterial attach='material' color='#B881F3' />
        </mesh>
    );
}

const Player = ({ position, controls }) => {
    const MOVE_SPEED = 0.05;
    const box = useRef();
    useFrame(() => {
        // console.log(controls);
        // if (controls.forward) {
        //     box.current.position.z -= MOVE_SPEED;
        //     box.current.rotation.y = Math.PI;
        // }

        // if (controls.left) {
        //     box.current.position.x -= MOVE_SPEED;
        //     box.current.rotation.y = (3 / 2) * Math.PI;
        // }

        // if (controls.back) {
        //     box.current.position.z += MOVE_SPEED;
        //     box.current.rotation.y = 0;
        // }
        // if (controls.right) {
        //     box.current.position.x += MOVE_SPEED;
        //     box.current.rotation.y = Math.PI / 2;
        // }
        // if (controls.forward && controls.left) {
        //     box.current.rotation.y = (5 / 4) * Math.PI;
        // }
        // if (controls.forward && controls.right) {
        //     box.current.rotation.y = (3 / 4) * Math.PI;
        // }
        // if (controls.back && controls.left) {
        //     box.current.rotation.y = (7 / 4) * Math.PI;
        // }
        // if (controls.back && controls.right) {
        //     box.current.rotation.y = Math.PI / 4;
        // }

        // if (controls.up) box.current.position.y += MOVE_SPEED;
        // if (controls.down) box.current.position.y -= MOVE_SPEED;
        if (controls.forward) {
            position = [position[0], position[1], (position[2] -= MOVE_SPEED)];
            console.log(position);
            // box.position.z -= MOVE_SPEED;
            // box.rotation.y = Math.PI;
        }
    });
    return (
        <>
            {/* initialize player */}
            <Box ref={box} position={position} />
        </>
    );
};

export default function App() {
    const [position, setPosition] = useState(
        /* { x: 0, y: 1.5, z: 20 } */ [0, 1.5, 20]
    );
    const [controls, setControls] = useState({
        forward: false,
        left: false,
        right: false,
        back: false,
        up: false,
        down: false,
    });

    const handleKeyUp = (event) => {
        switch (event.keyCode) {
            case 87: // w (forward)
                setControls({ ...controls, forward: false });
                break;
            case 65: // a (left)
                setControls({ ...controls, left: false });
                break;
            case 83: // s (back)
                setControls({ ...controls, back: false });
                break;
            case 68: // d (right)
                setControls({ ...controls, right: false });
                break;
            case 32: // spacebar (up)
                setControls({ ...controls, up: false });
                break;
            case 17: // left alt (down)
                setControls({ ...controls, down: false });
                break;
            default:
                break;
        }
    };

    const handleKeyDown = (event) => {
        switch (event.keyCode) {
            case 87: // w (forward)
                setControls({ ...controls, forward: true });
                break;
            case 65: // a (left)
                setControls({ ...controls, left: true });
                break;
            case 83: // s (back)
                setControls({ ...controls, back: true });
                break;
            case 68: // d (right)
                setControls({ ...controls, right: true });
                break;
            case 32: // spacebar (up)
                setControls({ ...controls, up: true });
                break;
            case 17: // left alt (down)
                setControls({ ...controls, down: true });
                break;
            default:
                break;
        }
    };
    return (
        <div
            className='controls'
            onKeyUp={(e) => handleKeyUp(e)}
            onKeyDown={(e) => handleKeyDown(e)}
            tabIndex={0}
        >
            <Canvas
            // camera={{
            //     position: [0, 10, 3],
            // }}
            // camera={camera}
            >
                <PerspectiveCamera
                    fov={60}
                    aspect={1920 / 1080}
                    near={1.0}
                    far={1000}
                    position={[0, 20, 0]}
                    rotation={[-1, 0, 0]}
                    makeDefault // Registers it as the default camera system-wide (default=false)
                    // {...props} // All THREE.PerspectiveCamera props are valid
                >
                    <mesh />
                </PerspectiveCamera>
                <pointLight position={[-10, 10, -10]} castShadow />
                <ambientLight intensity={0.5} />
                <Stars />
                <Physics>
                    <Plane />
                    <Player position={position} controls={controls} />
                    {/* <OrbitControls /> */}
                </Physics>
            </Canvas>
        </div>
    );
}
