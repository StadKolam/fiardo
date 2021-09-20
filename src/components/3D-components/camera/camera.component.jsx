import React, { useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';

const Camera = () => {
    const camera = useRef()
    const { aspect, size } = useThree()
    const set = useThree((state) => state.set);

    const pixelToThreeUnitRatio = 1
    const planeDistance = 0
    const cameraDistance = 500
    const distance = cameraDistance - planeDistance
    const height = size.height / pixelToThreeUnitRatio
    const halfFovRadians = Math.atan((height / 2) / distance)
    const fov = 2 * halfFovRadians * (90 / Math.PI)
    useEffect(() => void set({ camera: camera.current }), [])
    return <perspectiveCamera
        lookAt={0, -10, 0}
        ref={camera}
        fov={fov}
        zoom={50}
        position={[0, 2, cameraDistance]}
        onUpdate={self => self.updateProjectionMatrix()}
    />
}

export default Camera;
