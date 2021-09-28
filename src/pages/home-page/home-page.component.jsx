import React from 'react';
import HomePageScene from './home-page.scene';
import WithThree from '../../components/3D-components/with-three/with-three.component';
import { useThree, useFrame } from '@react-three/fiber';

const HomePage = WithThree(() => {

    const { viewport } = useThree()
    useFrame((state) => {

        alert(viewport.aspect)
        // if (viewport.aspect) {
        //     state.camera.zoom = viewport.aspect > 0.6 ? 50 : 20
        // }
        // state.camera.updateProjectionMatrix()
    })
    return (<HomePageScene />)

})
export default HomePage;