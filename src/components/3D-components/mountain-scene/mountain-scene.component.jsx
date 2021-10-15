import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function MountainScene(props) {

  const group = useRef()

  const { nodes, materials } = useGLTF('/mountain-scene_draco2.glb', "https://www.gstatic.com/draco/versioned/decoders/1.4.0/")
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
        geometry={nodes.cloud001.geometry}
        material={nodes.cloud001.material}
        position={[0.4, 2.49, -0.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh castShadow
        receiveShadow
        ref={props.cloudRef}
        geometry={nodes.cloud002.geometry}
        material={nodes.cloud002.material}
        position={[-2.84, 2.6, 1.12]}
        rotation={[Math.PI / 2, 0, 0.91]}
        scale={[0.07, 0.07, 0.07]}
      />

    </group>
  )
}

