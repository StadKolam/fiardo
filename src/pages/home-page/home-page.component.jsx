import React from 'react';
import HomePageScene from './home-page.scene';
import WithThree from '../../components/3D-components/with-three/with-three.component';
import { useThree, useFrame } from '@react-three/fiber';

const HomePage = WithThree(() => {

    const { viewport } = useThree()
    useFrame((state) => {
        if (viewport.aspect) {
            console.log(viewport.aspe)
            state.camera.zoom = viewport.aspect > 1 ? 45 : 50 * (1 - viewport.aspect)

            // state.camera.position.x = viewport.aspect > 1 ? 12 : 9
            // state.camera.position.z = viewport.aspect > 1 ? 12 : 9

        }
        state.camera.updateProjectionMatrix()
    })
    return (<HomePageScene />)

})
export default HomePage;