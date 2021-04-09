import React from 'react'
import ReactDOM from 'react-dom'
// import Roboto from '../../fonts/Roboto_Regular.json'
import GentilisBold from 'three/examples/fonts/gentilis_bold.typeface.json'
import * as THREE from 'three'
export default function Text({children, text, ...restProps}) {
    const font = new THREE.FontLoader().parse(GentilisBold);

    // configure font geometry
    const textOptions = {
        font,
        size: 5,
        height: 1
    };
    return (
        <>
            <mesh position={[1, 3, 1]}>

                <textGeometry attach='geometry' args={[text, textOptions]} {...restProps}/>
                <meshStandardMaterial attach='material' />
            </mesh>
        </>
    )
}