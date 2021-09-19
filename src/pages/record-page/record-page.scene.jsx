import React, { Suspense } from 'react';
import { Html } from '@react-three/drei';
import NeonAd from '../../components/3D-components/neon-ad/neon-ad.component';
import RecordCompany from '../../components/3D-components/record-company/record-company.component';
import PlayPauseButton from '../../components/3D-components/play-pause-button/play-pause-button.component';
import FiardoRecordsLogo from '../../components/3D-components/fiardo-records-logo/fiardo-records-logo.component';
import Loader from '../../components/3D-components/loader/loader.component';
import StreetLight from '../../components/3D-components/street-light/street-light.component';
import MagicBoard from '../../components/magic-board/magic-board';
export default function RecordScene() {
    return (
        <>
            <StreetLight lightPos={[4.5, 3, -1]} lightTar={[4, 0, -0.5]} />
            <StreetLight lightPos={[-0.5, 3, 3.5]} lightTar={[-0.5, 0, 4]} />
            <Suspense fallback={<Loader />}>
                <RecordCompany />
                <PlayPauseButton scale={[0.25, 0.25, 0.25]} rotation={[0, -Math.PI / 4, 0]} position={[-2, 4.8, 0.6]} />
                <FiardoRecordsLogo scale={[0.7, 0.7, 0.7]} position={[-0.2, 5, -1]} rotation={[Math.PI / 2, 0, -Math.PI / 4]} />
                <NeonAd scale={[0.8, 0.8, 0.8]} rotation={[0, -Math.PI / 4, 0]} position={[-3.2, 0.35, 2.2]} />
            </Suspense>
            <Html
                transform
                occlude
                rotation={[0, Math.PI / 4, 0]} position={[-0.48, 2.66, -0.48]}>
                <MagicBoard />
            </Html>
        </>)
}