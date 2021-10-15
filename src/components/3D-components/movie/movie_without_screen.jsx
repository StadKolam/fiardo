import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function MovieWithoutScreen(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/hp_out.glb', "https://www.gstatic.com/draco/versioned/decoders/1.4.0/");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow recieveShadow geometry={nodes.asphalt.geometry} material={materials.asphalt}>
        <mesh castShadow recieveShadow geometry={nodes.abcd.geometry} material={materials['text-abcd']} position={[-3.02, 0.25, -2.59]} />
        <group position={[-8.94, 0, 0]}>
          <mesh castShadow recieveShadow geometry={nodes.automatics_1.geometry} material={materials['automatic-body']} />
          <mesh castShadow recieveShadow geometry={nodes.automatics_2.geometry} material={materials['automatic-arm']} />
        </group>
        <mesh castShadow recieveShadow geometry={nodes.base.geometry} material={materials.base} />
        <mesh castShadow recieveShadow geometry={nodes.buliding.geometry} material={materials.building} />
        <mesh castShadow recieveShadow geometry={nodes.bumps.geometry} material={materials.bump} position={[0, 0, -0.94]} />
        <mesh
          geometry={nodes['company-logo'].geometry}
          material={materials.text}
          position={[-1.46, 0.71, 4.4]}
          rotation={[0.17, 0, 0]}
        />
        <mesh castShadow recieveShadow geometry={nodes.efgh.geometry} material={materials['efgh-mat']} position={[-3.02, 0.25, -1.18]} />
        <mesh castShadow recieveShadow geometry={nodes.ijkl.geometry} material={materials['ijkl-mat']} position={[-3.02, 0.25, 0.3]} />
        <mesh castShadow recieveShadow geometry={nodes.lamps.geometry} material={materials.lamp} />
        <mesh castShadow recieveShadow geometry={nodes.mnop.geometry} material={materials['mnop-mat']} position={[-3.09, 0.25, 1.79]} />
        <mesh castShadow recieveShadow geometry={nodes.qrst.geometry} material={materials['qrst-mat']} position={[-3.02, 0.25, 3.23]} />
        <mesh castShadow recieveShadow geometry={nodes['refuge-islands_1'].geometry} material={materials['refuge-islands-ground']} />
        <mesh castShadow recieveShadow geometry={nodes['refuge-islands_2'].geometry} material={materials['refuge-islands']} />
      </mesh>
    </group>
  );
}


