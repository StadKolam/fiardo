import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function MovieWithoutScreen(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/movie_without_screen_draco.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.asphalt.geometry}
        material={materials.asphalt}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.abcd.geometry}
          material={materials['text-abcd']}
          position={[-3.02, 0.25, -2.59]}
        />
        <group position={[-8.94, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.automatics_1.geometry}
            material={materials['automatic-body']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.automatics_2.geometry}
            material={materials['automatic-arm']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base.geometry}
          material={materials.base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buliding.geometry}
          material={materials.building}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumps.geometry}
          material={materials.bump}
          position={[0, 0, -0.94]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['company-logo'].geometry}
          material={materials.text}
          position={[-1.46, 0.71, 4.4]}
          rotation={[0.17, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[3.3, 1.01, -1.1]}
          rotation={[0, -0.41, 0]}
          scale={[0.42, 0.42, 0.42]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          position={[2.9, 0.96, -0.47]}
          rotation={[0, -0.41, 0]}
          scale={[0.56, 0.56, 0.56]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[3.3, 0.92, -0.48]}
          rotation={[0, -0.41, 0]}
          scale={[0.42, 0.42, 0.42]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[3.41, 1.26, -0.76]}
          rotation={[0, -0.41, 0]}
          scale={[0.71, 0.71, 0.71]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={nodes.Cube005.material}
          position={[2.83, 1.31, -0.76]}
          rotation={[0, -0.41, 0]}
          scale={[0.28, 0.28, 0.28]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.efgh.geometry}
          material={materials['efgh-mat']}
          position={[-3.02, 0.25, -1.18]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ijkl.geometry}
          material={materials['ijkl-mat']}
          position={[-3.02, 0.25, 0.3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lamps.geometry}
          material={materials.lamp}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mnop.geometry}
          material={materials['mnop-mat']}
          position={[-3.09, 0.25, 1.79]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.qrst.geometry}
          material={materials['qrst-mat']}
          position={[-3.02, 0.25, 3.23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['refuge-islands_1'].geometry}
          material={materials['refuge-islands-ground']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['refuge-islands_2'].geometry}
          material={materials['refuge-islands']}
        />
        <mesh castShadow
          receiveShadow geometry={nodes.Vert.geometry} material={materials['tree-branches']} position={[3.13, 0.25, -0.79]} />
      </mesh>
    </group>
  );
}


