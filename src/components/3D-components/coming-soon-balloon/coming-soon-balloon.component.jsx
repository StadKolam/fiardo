import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ComingSoonBalloon(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/coming-soon-balloon_draco.glb', "https://www.gstatic.com/draco/versioned/decoders/1.4.0/")

  return (
    <group scale={[0.6, 0.6, 0.6]} ref={props.balloonRef} {...props} dispose={null}>
      <group position={[0, 3.42, 0]}>
        <mesh geometry={nodes.Sphere_1.geometry} material={materials['balloon-ver-stripe1']} />
        <mesh geometry={nodes.Sphere_2.geometry} material={materials['balloon-ver-stripe2']} />
      </group>
      <mesh geometry={nodes.Circle.geometry} material={nodes.Circle.material} scale={[1.16, 1.16, 1.16]} />
      <mesh

        geometry={nodes.Circle001.geometry}
        material={nodes.Circle001.material}
        position={[0, 1.48, 0]}
        scale={[0.73, 0.73, 0.73]}
      />
      <mesh

        geometry={nodes.Cycloid.geometry}
        material={nodes.Cycloid.material}
        position={[0, 0.76, 0]}
        scale={[0.48, 0.48, 0.48]}
      />
      <mesh

        geometry={nodes.BezierCircle.geometry}
        material={nodes.BezierCircle.material}
        position={[0, 0.75, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh

        geometry={nodes.Text.geometry}
        material={materials['coming-soon']}
        position={[0, 3.68, 2.09]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.9, 0.9, 1.04]}
      />
    </group>
  )
}