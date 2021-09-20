import React, { Suspense } from 'react';
import { Physics } from '@react-three/cannon';
import PhyPlane from '../../components/3D-components/phy-plane/phy-plane.component';
import Vehicle from '../../components/3D-components/vehicle/vehicle';
import FixVehicle from '../../components/3D-components/vehicle/fix-vehicle';
import MovieWithoutScreen from '../../components/3D-components/movie/movie_without_screen';
import Screen from '../../components/3D-components/screen/screen.component';
import useHomeStore from '../../zustand/home-page-store';
import SignFunctions from '../../components/3D-components/sign-in-sign-out/sign-in-sign-out.component';
import HighLightedLetters from '../../components/highlighted-letters/highlighted-letters.component'
import MovingSpot from '../../components/3D-components/moving-spot/moving-spot.component';
import MovingBar from '../../components/3D-components/movie/moving-bar';
import Loader from '../../components/3D-components/loader/loader.component';
import Barrier from '../../components/3D-components/barrier/barrier.component';

export default function HomePageScene() {

    const { user, videoFileName } = useHomeStore();
    // const [, setReady] = useState(false);
    // useEffect(() => setTimeout(() => setReady(true), setVideo('/fiardo-welcome.mp4'), 1000), [setVideo]);

    return (
        <>


            <MovingSpot position={[0, 30, 0]} />

            <Physics
                broadphase="SAP"
                contactEquationRelaxation={4}
                friction={1e-3}
                allowSleep
            //debug={{ color: 'black', scale: 1 }}
            >
                <PhyPlane
                    position={[0, -0.25, 0]}
                    userData={{ id: 'floor' }}
                    material={'ground'}
                />
                <PhyPlane
                    position={[0, -1, 0]}
                    userData={{ id: 'floor' }}
                    material={'ground'}
                    args={[30, 0.5, 30]}
                />

                {user ? (
                    <SignFunctions
                        fileName={'/buttons/sign-out-bungee.glb'}
                        signOut={true}
                    />
                ) : (
                    <SignFunctions
                        fileName={'/buttons/sign-in-bungee.glb'}
                        linkUrl={'/sign-in-sign-up'}
                    />
                )}

                <Screen url={videoFileName} />
                <HighLightedLetters />
                <MovingBar position={[3, 0.5, 4.1]} />

                <Barrier position={[-0.6, 0.8, 4.3]} args={[2.2, 1, 1]} />
                <Barrier
                    rotation={[0, Math.PI / 2, 0]}
                    position={[3.3, 0.8, -0.8]}
                    args={[8., 1, 1]}
                />
                <Barrier
                    rotation={[0, Math.PI / 2, 0]}
                    position={[-4.5, 0.8, -0.8]}
                    args={[8, 1, 1]}
                />
                <Vehicle
                    position={[4.5, 0.5, 2]}
                    angularVelocity={[0, 0.5, 0]}
                    wheelRadius={0.3}
                />
                <FixVehicle
                    scale={[0.3, 0.3, 0.3]}
                    position={[-2.6, 0.5, -1.6]}
                    fileName={'vehicle-fix_draco.glb'}
                />
                <FixVehicle
                    scale={[0.3, 0.3, 0.3]}
                    position={[0, 0.5, -0.1]}
                    fileName={'vehicle-fix-kombi_draco.glb'}
                />
            </Physics>
            <Suspense fallback={<Loader />}>
                <MovieWithoutScreen />
            </Suspense>
        </>
    );
}
