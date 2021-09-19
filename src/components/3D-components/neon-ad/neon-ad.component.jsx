import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing'


export default function NeonAd(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/neon-ad_draco.glb')
  const clapRef = useRef()
  const hatRef = useRef()
  const synthRef = useRef()
  const kickRef = useRef()
  let refArrays = [clapRef, synthRef, kickRef, hatRef]


  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <mesh castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials['neon-ad-frame']}
          position={[0, 0.69, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh castShadow
          receiveShadow
          geometry={nodes.feet.geometry}
          material={nodes.feet.material}
          position={[0, -0.08, 0.44]}
          scale={[1.28, 2.91, 1.28]}
        />
        <mesh castShadow
          receiveShadow
          geometry={nodes.feet001.geometry}
          material={nodes.feet001.material}
          position={[0, -0.08, -0.49]}
          scale={[1.28, 2.98, 1.28]}
        />
        <mesh castShadow
          receiveShadow
          ref={synthRef}
          geometry={nodes.Curve003.geometry}
          material={materials['SVGMat.002']}
          position={[0.05, 2.9, 0.19]}
          rotation={[1.81, 0, -Math.PI / 2]}
          scale={[8.15, 8.36, 8.45]}>
          <meshStandardMaterial color={'#eb34cf'} transparent opacity={1} />
        </mesh>
        <mesh castShadow
          receiveShadow
          ref={kickRef}
          geometry={nodes.Curve.geometry}
          material={materials['SVGMat.004']}
          position={[0, 1.45, -0.31]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[10.51, 12.76, 13.73]}>
          <meshStandardMaterial color={'#eb34cf'} transparent opacity={1} />
        </mesh>
        <mesh castShadow
          receiveShadow
          ref={clapRef}
          geometry={nodes.Curve004.geometry}
          material={materials['SVGMat.005']}
          position={[0.04, 4, 0.35]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[5.56, 5.56, 5.56]}>
          <meshStandardMaterial color={'#eb34cf'} transparent opacity={1} />
        </mesh>
        <mesh castShadow
          receiveShadow
          ref={hatRef}
          geometry={nodes.Curve001.geometry}
          material={materials['SVGMat.006']}
          position={[0.04, 1.93, -0.35]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[5.27, 5.27, 5.27]}>
          <meshStandardMaterial color={'#eb34cf'} transparent opacity={1} />
        </mesh>
      </group>
      <EffectComposer autoClear={false}>
        <SelectiveBloom
          selection={refArrays}
          intensity={3}
          luminanceThreshold={0.01}
          luminanceSmoothing={0.0025}
        />
      </EffectComposer>
    </>
  )
}
