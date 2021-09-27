import React from 'react';
import WithThree from '../../components/3D-components/with-three/with-three.component';
import { useFrame, useThree } from '@react-three/fiber';
import ComingSoonPageScene from './coming-soon-page.scene';


const ComingSoonPage = WithThree(() => {

    const { viewport } = useThree()
    useFrame((state) => {
        state.camera.zoom = viewport.aspect > 0.6 ? 40 : 15
        state.camera.updateProjectionMatrix()
    })
    return (<ComingSoonPageScene />)

})
export default ComingSoonPage;