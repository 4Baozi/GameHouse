import React from 'react'
import ReactDOM from 'react-dom'
// import Roboto from '../../fonts/Roboto_Regular.json'
import GentilisBold from 'three/examples/fonts/gentilis_bold.typeface.json'
import DroidSans from 'three/examples/fonts/droid/droid_sans_regular.typeface.json'
import PS2Play from '../../fonts/Press Start 2P_Regular.json'
import * as THREE from 'three'
export default function Text({position, text, color, ...restProps}) {
    const font = new THREE.FontLoader().parse(PS2Play);
    // configure font geometry
    const textOptions = {
        font,
        size: 5,
        height: 1
    };
    return (
        <>
            <mesh position={position}>

                <textGeometry attach='geometry' args={[text, textOptions]} {...restProps}/>
                <meshStandardMaterial attach='material' color={color} />
            </mesh>
        </>
    )
}