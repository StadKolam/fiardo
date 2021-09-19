import { Vector3 } from 'three';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { SpotLight } from '@react-three/drei';
import useHomeStore from '../../../zustand/home-page-store';
const vec = new Vector3();

export default function MovingSpot(props) {
  const group = useRef();
  const [light, set] = useState();
  const { lightPozX, lightPozY, int } = useHomeStore()

  useFrame(() => {
    //group.current.position.lerp(vec.set(state.mouse.x, state.mouse.y, 0), 0.1);
    light.target.position.lerp(vec.set(lightPozX, 3, lightPozY), 0.1);
    light.intensity = int;
  });

  return (
    <group ref={group}>
      <SpotLight

        ref={set}
        castShadow
        penumbra={1}
        distance={100}
        angle={0.1}
        attenuation={5}

        intensity={int}
        {...props}
      />
      {light && <primitive object={light.target} />}
    </group>
  );
}
