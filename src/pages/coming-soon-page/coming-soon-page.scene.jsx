import React, { Suspense } from 'react';
import MountainScene from '../../components/3D-components/mountain-scene/mountain-scene.component';
import Loader from '../../components/3D-components/loader/loader.component';
import ComingSoonBalloon from '../../components/3D-components/coming-soon-balloon/coming-soon-balloon.component';

export default function ComingSoonScene(props) {

    return (
        <Suspense fallback={<Loader />}>
            <MountainScene />
            <ComingSoonBalloon position={[3, 3, 2]} />
        </Suspense>)
}