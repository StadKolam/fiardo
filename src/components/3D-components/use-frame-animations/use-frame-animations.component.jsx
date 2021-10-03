import { useFrame } from '@react-three/fiber';

export const RotateY = (props) => {
    useFrame(({ clock }) => {
        if (props.meshRef.current) {

            props.meshRef.current.rotation.y -= 0.01;
        }
    });
    return null;
}

export const EvenMoveY = (props) => {
    useFrame(({ clock }) => {
        if (props.meshRef.current) {
            const t = clock.getElapsedTime();
            const z = Math.cos(1 * t) * 0.2;
            props.meshRef.current.position.y = z + 3;
        }
    })
    return null;
}