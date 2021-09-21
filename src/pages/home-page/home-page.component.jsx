import React from 'react';
import HomePageScene from './home-page.scene';
import WithThree from '../../components/3D-components/with-three/with-three.component';
import { useThree, useFrame } from '@react-three/fiber';

const HomePage = WithThree(() => {

    const { viewport } = useThree()
    useFrame((state) => {
        state.camera.zoom = viewport.aspect > 0.6 ? 50 : 45 * viewport.aspect
        state.camera.updateProjectionMatrix()
    })
    return (<HomePageScene />)

})
export default HomePage;