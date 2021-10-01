import React, { useRef } from 'react';
import WithThree from '../../components/3D-components/with-three/with-three.component';
import { useFrame, useThree } from '@react-three/fiber';
import ComingSoonPageScene from './coming-soon-page.scene';


const ComingSoonPage = WithThree(() => {

    const { viewport } = useThree()
    useFrame((state) => {

        if (viewport.aspect) {
            state.camera.zoom = viewport.aspect > 1 ? 45 : 40 * viewport.aspect
        }
        state.camera.updateProjectionMatrix()
    })
    return (<ComingSoonPageScene />)

})
export default ComingSoonPage;