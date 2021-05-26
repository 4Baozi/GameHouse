import React, { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import {
    OrbitControls,
    Stars,
    Box,
    PerspectiveCamera,
} from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { Canvas, useFrame } from "@react-three/fiber";
import Model from "./resources/Walk.js";
import AmoungUs from "./resources/AmoungUs";
import { handleKeyDown, handleKeyUp } from "./contr";
function Plane() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshLambertMaterial attach='material' color='#B881F3' />
        </mesh>
    );
}

const Player = ({ position, rotation, isBox }) => {
    const box = useRef();
    if (isBox) return <Box ref={box} position={position} rotation={rotation} />;
    return <Model ref={box} position={position} rotation={rotation} />;
};
export default function ChatTest() {
    const MOVESPEED = 0.3;
    const [connected, setConnected] = useState(false);
    const [yourId, setYourId] = useState();
    const [username, setUsername] = useState("Test");
    const [allUsers, setAllUsers] = useState([]);
    const [position, setPosition] = useState([0, 0, 0]);
    const [rotation, setRotation] = useState([]);
    const [allPositions, setAllPositions] = useState([]);
    const [controls, setControls] = useState({
        forward: false,
        left: false,
        right: false,
        back: false,
        up: false,
        down: false,
    });
    let keys = {};
    const socketRef = useRef();
    useEffect(() => {
        setConnected(true);
        socketRef.current = io.connect("/");
        socketRef.current.on("yourID", (id) => {
            setYourId(id);
        });
        socketRef.current.emit("join server", username);
        socketRef.current.on("new user", (users) => {
            setAllUsers(users);
            // setAllPositions(allPositions);
        });
        socketRef.current.on("new position", (positions) => {
            setAllPositions(positions);
        });
        socketRef.current.on("update user", (allPositions) => {
            setAllPositions(allPositions);
        });
    }, []);

    const fireEvent = (keys) => {
        let newPosition = position;
        let newRotation = rotation;
        if (keys["w"]) {
            newPosition = [position[0], position[1], position[2] - MOVESPEED];
            newRotation = [0, Math.PI, 0];
        }
        if (keys["s"]) {
            newPosition = [position[0], position[1], position[2] + MOVESPEED];
            newRotation = [0, 0, 0];
        }
        if (keys["a"]) {
            newPosition = [position[0] - MOVESPEED, position[1], position[2]];
            newRotation = [0, (3 / 2) * Math.PI, 0];
        }
        if (keys["d"]) {
            newPosition = [position[0] + MOVESPEED, position[1], position[2]];
            newRotation = [0, Math.PI / 2, 0];
        }
        if (keys["w"] && keys["d"]) {
            newPosition = [
                position[0] - MOVESPEED,
                position[1],
                position[2] - MOVESPEED,
            ];
            newRotation = [0, (3 / 4) * Math.PI, 0];
        }
        if (keys["w"] && keys["a"]) {
            newPosition = [
                position[0] + MOVESPEED,
                position[1],
                position[2] - MOVESPEED,
            ];
            newRotation = [0, (5 / 4) * Math.PI, 0];
        }
        if (keys["s"] && keys["a"]) {
            newPosition = [
                position[0] + MOVESPEED,
                position[1],
                position[2] + MOVESPEED,
            ];
            newRotation = [0, (7 / 4) * Math.PI, 0];
        }
        if (keys["s"] && keys["d"]) {
            newPosition = [
                position[0] - MOVESPEED,
                position[1],
                position[2] + MOVESPEED,
            ];
            newRotation = [0, Math.PI / 4, 0];
        }

        if (position != newPosition) setPosition(newPosition);
        if (rotation != newRotation) setRotation(newRotation);

        socketRef.current.emit("new position", {
            username,
            id: yourId,
            position: position,
            rotation: rotation,
        });
    };
    return (
        <div>
            <div
                onKeyUp={(e) => handleKeyUp(e, keys)}
                onKeyDown={(e) => {
                    handleKeyDown(e, keys);
                    fireEvent(keys);
                }}
                tabIndex={0}
                style={{ height: "100vh", backgroundColor: "black" }}
            >
                Testing Controls
                <Canvas camera={[10, 0, 0]}>
                    <Physics>
                        <Plane />
                        <AmoungUs />
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
                        <Stars />
                        <OrbitControls />
                        <ambientLight intensity={0.5} />
                        {allPositions.map((player, index) => {
                            console.log(index);
                            return (
                                <Player
                                    key={index}
                                    isBox={index % 2 === 1}
                                    position={player.position}
                                    rotation={player.rotation}
                                />
                            );
                        })}
                    </Physics>
                </Canvas>
            </div>
        </div>
    );
}
