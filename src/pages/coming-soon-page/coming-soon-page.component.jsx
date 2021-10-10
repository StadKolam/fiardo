import React, { useRef, Suspense } from 'react';
import WithThree from '../../components/3D-components/with-three/with-three.component';
import { useFrame, useThree } from '@react-three/fiber';
import MountainScene from '../../components/3D-components/mountain-scene/mountain-scene.component';
import Loader from '../../components/3D-components/loader/loader.component';
import ComingSoonBalloon from '../../components/3D-components/coming-soon-balloon/coming-soon-balloon.component';
import { EvenMoveY, RotateY } from '../../components/3D-components/use-frame-animations/use-frame-animations.component';

const ComingSoonPage = WithThree(() => {

    const { viewport } = useThree()
    const balloonRef = useRef();
    const cloudRef = useRef();
    useFrame((state) => {

        if (viewport.aspect) {
            state.camera.zoom = viewport.aspect > 1 ? 45 : 42 * viewport.aspect
        }
        state.camera.updateProjectionMatrix()
    })
    return (<>
        <Suspense fallback={<Loader />}>
            <MountainScene cloudRef={cloudRef} />
            <ComingSoonBalloon balloonRef={balloonRef} position={[3, 3, 2]} />
        </Suspense>
        <RotateY meshRef={balloonRef} />
        <EvenMoveY meshRef={cloudRef} />
    </>)

})
export default ComingSoonPage;