import React from 'react';
import HomePageScene from './home-page.scene';
import WithThree from '../../components/3D-components/with-three/with-three.component';
import { useThree, useFrame } from '@react-three/fiber';

const HomePage = WithThree(() => {

    const { viewport } = useThree()
    useFrame((state) => {
        state.camera.zoom = viewport.aspect > 0.6 ? 40 : 10

        state.camera.position.z = viewport.aspect > 0.6 ? 12 : 14
        state.camera.position.x = viewport.aspect > 0.6 ? 12 : 14
        state.camera.position.y = viewport.aspect > 0.6 ? 11 : 12
        state.camera.updateProjectionMatrix()
    })
    return (<HomePageScene />)

})
export default HomePage;