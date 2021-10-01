import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';

export default function MountainScene(props) {

  const group = useRef()
  // const cloud2 = useRef()
  // const cloud3 = useRef()

  // useFrame(({ clock }) => {
  //   const t = clock.getElapsedTime();
  //   const z = Math.cos(1 * t) * 0.1;

  // })
  useFrame(({ clock }) => {
    console.log("I am executed")

  })

  const { nodes, materials } = useGLTF('/mountain-scene_draco.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow
        receiveShadow geometry={nodes.asphalt.geometry} material={nodes.asphalt.material}>
        <mesh castShadow
          receiveShadow geometry={nodes.base.geometry} material={materials.base} />
      </mesh>
      <group position={[0, 3.59, 0]}>
        <mesh castShadow
          receiveShadow geometry={nodes.asphalt001_1.geometry} material={nodes.asphalt001_1.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.asphalt001_2.geometry} material={materials.snow} />
        <mesh castShadow
          receiveShadow geometry={nodes.asphalt001_3.geometry} material={materials.brown} />
      </group>
      <group position={[-0.71, 0.95, 0.3]} scale={[0.02, 0.02, 0.02]}>
        <mesh castShadow
          receiveShadow geometry={nodes.Cylinder024.geometry} material={materials['Tree3_1.001']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cylinder024_1.geometry} material={materials['Tree3_2.001']} />
      </group>
      <mesh castShadow
        receiveShadow
        geometry={nodes.cloud.geometry}
        material={nodes.cloud.material}
        position={[0.4, 2.49, -0.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh castShadow
        receiveShadow
        // ref={cloud2}
        geometry={nodes.cloud001.geometry}
        material={nodes.cloud001.material}
        position={[-2.84, 2.6, 1.12]}
        rotation={[Math.PI / 2, 0, 0.91]}
        scale={[0.07, 0.07, 0.07]}
      />
      <mesh castShadow
        receiveShadow
        // ref={cloud3}
        geometry={nodes.cloud002.geometry}
        material={nodes.cloud002.material}
        position={[-0.93, 3.06, -4.09]}
        rotation={[Math.PI / 2, 0, -2.55]}
        scale={[0.08, 0.08, 0.08]}
      />
    </group>
  )
}

