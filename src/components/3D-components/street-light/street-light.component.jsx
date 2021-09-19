import React, { useMemo } from 'react';
import * as THREE from 'three';



export default function StreetLight(props) {
    const light = useMemo(() => new THREE.SpotLight(0xffffff), [])
    const { lightPos, lightTar } = { ...props }
    return (
        <>
            <primitive penumbra={0.9}
                intensity={0.6}
                angle={0.5}
                attenuation={3} object={light} position={lightPos} color={'#fad264'} />
            <primitive object={light.target} position={lightTar} />
        </>
    )
}