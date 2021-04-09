import React from 'react'

export default function Box() {
    // const [ref, api] = useBox(() => ({
    //     mass: 1,
    //     position: [0, 5, 0],
    // }))
    return (
        <mesh
            // onClick={() => api.velocity.set(0, 5, 0)}
            // ref={ref}
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