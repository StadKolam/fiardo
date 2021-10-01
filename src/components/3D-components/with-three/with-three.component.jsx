import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Plane } from '@react-three/drei'
import Instructions from '../../instructions/instructions.component';
import threeAttrs from './threeAttrs';


const WithThree = (BaseComponent) => ({ instructionText, pageType = "coming-soon-page", ...props }) => {
    const attrs = threeAttrs[pageType]

    return (
        <>
            <Canvas
                shadows={true}
                color={'black'}
                orthographic
                camera={{
                    zoom: 20,
                    position: [12, 11, 12],
                }}
                frameloop="demand"
            >
                <rectAreaLight
                    width={10}
                    height={30}
                    intensity={attrs.rectAreaLight.intensity}
                    color={attrs.rectAreaLight.color}
                    position={[0, 10, 27]}
                />
                <spotLight
                    position={attrs.spotLight1.position}
                    intensity={attrs.spotLight1.intensity}
                    color={attrs.spotLight1.color}
                    castShadow
                    penumbra={0.7}
                    shadow-bias={-0.001}
                />
                {attrs.spotLight2 && <spotLight
                    position={attrs.spotLight2.position}
                    intensity={attrs.spotLight2.intensity}
                    color={attrs.spotLight2.color}
                    castShadow
                    penumbra={0.7}
                    shadow-bias={-0.001}
                />}

                <hemisphereLight
                    skyColor={attrs.hemisphereLight.skyColor}
                    groundColor={attrs.hemisphereLight.groundColor}
                    intensity={attrs.hemisphereLight.intensity}

                />
                <Plane
                    receiveShadow={true}
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, -0.7, 0]}
                    args={[100, 100]}
                >
                    <meshStandardMaterial attach="material" color="#adebf7" />

                </Plane>

                <BaseComponent />
            </Canvas>
            {instructionText ? <Instructions instText={instructionText} /> : null}

        </>
    )
}

export default WithThree;