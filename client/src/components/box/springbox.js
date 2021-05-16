import React, { useState, useEffect, useRef } from "react";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

export default function Box({ position }) {
    const [active, setActive] = useState(0);
    const activeRef = useRef(active);
    activeRef.current = active;
    useEffect(() => {
        let timeout;
        const toggleActive = () => {
            timeout = setTimeout(() => {
                setActive(Number(!activeRef.current));
                toggleActive();
            }, Math.random() * 2000 + 1000);
        };

        toggleActive();
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const { spring } = useSpring({
        spring: active,
        config: {
            mass: 5,
            tension: 400,
            friction: 50,
            precision: 0.0001,
        },
    });

    const scale = spring.to([0, 1], [1, 2]);
    const rotation = spring.to([0, 1], [0, 2], [0, Math.PI]);
    const color = spring.to([0, 1], ["#7d76df", "#FE7BBF"]);

    // const [ref, api] = useBox(() => ({
    //     mass: 1,
    //     position: [0, 5, 0],
    // }))
    return (
        // <mesh
        //     // onClick={() => api.velocity.set(0, 5, 0)}
        //     // ref={ref}
        //     position={[0, 5, 0]}
        //     rotation={[0, 1, 0]}
        // >
        //     <boxBufferGeometry
        //         attach="geometry"
        //         args={[1, 2, 2]}
        //     />
        //     <meshStandardMaterial
        //         attach="material"
        //         color="hotpink"
        //     />
        // </mesh>
        <a.mesh
            rotation-y={rotation}
            scale-x={scale}
            scale-y={scale}
            scale-z={scale}
            position={position}
        >
            <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
            <a.meshStandardMaterial
                roughness={0.5}
                attach='material'
                color={color}
            />
        </a.mesh>
    );
}

// function Box() {
//     const [ref, api] = useBox(() => ({
//         mass: 1,
//         position: [0, 5, 0],
//     }))
//     return (
//         <mesh
//             onClick={() => api.velocity.set(0, 5, 0)}
//             ref={ref}
//             position={[0, 5, 0]}
//             rotation={[0, 1, 0]}
//         >
//             <boxBufferGeometry
//                 attach="geometry"
//                 args={[1, 2, 2]}
//             />
//             <meshStandardMaterial
//                 attach="material"
//                 color="lightgreen"
//             />
//         </mesh>
//     )
// }
