import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

export default function FixVehicle(props) {
  const { fileName } = { ...props };

  const [ref] = useBox(() => ({
    mass: 50,
    collisionResponse: 1,
    args: [0.5, 0.5, 1.3],
    ...props,
  }));

  const { nodes, materials } = useGLTF(fileName);

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[0, Math.PI, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['vehicle-body']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials['vehicle-bumper']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials['vehicle-plate']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials['vehicle-front-lamp']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_4.geometry}
          material={materials['vehicle-rear-lamp']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_5.geometry}
          material={materials['vehicle-window']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_6.geometry}
          material={materials['vehicle-wheel']}
        />
      </group>
    </group>
  );
}
