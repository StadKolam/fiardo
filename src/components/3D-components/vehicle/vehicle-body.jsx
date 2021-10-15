import { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

const VehicleBody = forwardRef(
  ({ args = [0.5, 0.5, 1.3], mass = 500, ...props }, ref) => {
    const { nodes, materials } = useGLTF('/vehicle-body_draco.glb', "https://www.gstatic.com/draco/versioned/decoders/1.4.0/");
    const [, api] = useBox(
      () => ({
        mass,
        args,
        allowSleep: false,
        ...props,
      }),
      ref
    );

    return (
      <mesh ref={ref} api={api}>
        <group position={[0, -0.075, 0]} scale={[0.3, 0.3, 0.3]}>
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
            geometry={nodes.Text.geometry}
            material={materials['vehicle-plate-text']}
            position={[-0.24, -0.5, 2.21]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text001.geometry}
            material={materials['vehicle-rear-plate-text']}
            position={[0.25, -0.5, -2.25]}
            rotation={[Math.PI / 2, 0, Math.PI]}
          />
        </group>
      </mesh>
    );
  }
);

export default VehicleBody;
