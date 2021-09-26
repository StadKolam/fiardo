import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function RecordCompany(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/record-company_draco.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow
        receiveShadow geometry={nodes.asphalt.geometry} material={nodes.asphalt.material}>
        <mesh castShadow
          receiveShadow geometry={nodes.base.geometry} material={materials.base} />
      </mesh>
      <mesh castShadow
        receiveShadow geometry={nodes.asphalt001.geometry} material={nodes.asphalt001.material} />
      <mesh castShadow
        receiveShadow geometry={nodes.asphalt002.geometry} material={nodes.asphalt002.material} />
      <mesh castShadow
        receiveShadow geometry={nodes.asphalt002_1.geometry} material={materials['pavement-margin']} />
      <mesh castShadow
        receiveShadow geometry={nodes.asphalt002_2.geometry} material={materials.concrete} />
      <group position={[-0.77, 0.34, -0.74]}>
        <mesh castShadow
          receiveShadow geometry={nodes.Plane.geometry} material={materials['office-walls']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Plane_1.geometry} material={materials['entrance-glass']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Plane_2.geometry} material={materials.doors} />
        <mesh castShadow
          receiveShadow geometry={nodes.Plane_3.geometry} material={materials['window-lamp-off']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Plane_4.geometry} material={materials['window-lamp-on']} />
      </group>
      <mesh castShadow
        receiveShadow geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} position={[0.54, 0.71, -0.35]} />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[-0.35, 0.71, 0.55]}
      />
      <mesh castShadow
        receiveShadow geometry={nodes['red-carpet'].geometry} material={materials['red-carpet']} position={[0, -0.24, 0]} />
      <group position={[3.84, 0.55, -2.49]} scale={[0.35, 0.35, 0.35]}>
        <mesh castShadow
          receiveShadow geometry={nodes.Cube002.geometry} material={materials['vehicle-body']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube002_1.geometry} material={materials['vehicle-bumper']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube002_2.geometry} material={materials['vehicle-plate']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube002_3.geometry} material={materials['vehicle-front-lamp']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube002_4.geometry} material={materials['vehicle-rear-lamp']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube002_5.geometry} material={materials['vehicle-window']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube002_6.geometry} material={materials['vehicle-wheel']} />
      </group>
      <group position={[-1.45, -0.09, 1.47]}>
        <mesh castShadow
          receiveShadow geometry={nodes.asphalt004.geometry} material={nodes.asphalt004.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.asphalt004_1.geometry} material={nodes.asphalt004_1.material} />
      </group>
      <group position={[-0.4, -0.08, -0.4]} rotation={[0, -0.53, 0]}>
        <mesh castShadow
          receiveShadow geometry={nodes.asphalt006.geometry} material={nodes.asphalt006.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.asphalt006_1.geometry} material={nodes.asphalt006_1.material} />
      </group>
      <group position={[3.8, 0.54, 1.32]} scale={[0.33, 0.33, 0.33]}>
        <mesh castShadow
          receiveShadow geometry={nodes.Cube001.geometry} material={nodes.Cube001.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube001_1.geometry} material={nodes.Cube001_1.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube001_2.geometry} material={nodes.Cube001_2.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube001_3.geometry} material={nodes.Cube001_3.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube001_4.geometry} material={nodes.Cube001_4.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube001_5.geometry} material={nodes.Cube001_5.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube001_6.geometry} material={nodes.Cube001_6.material} />
      </group>
      <mesh castShadow
        receiveShadow geometry={nodes.lamps.geometry} material={nodes.lamps.material} position={[7.46, 0, 3.49]} />
      <mesh
        geometry={nodes.lamps001.geometry}
        material={nodes.lamps001.material}
        position={[-0.47, 1.44, 3.16]}
        rotation={[0, -1.57, 0]}
      />
      <group position={[-2.38, 0.54, 3.85]} rotation={[0, 1.57, 0]} scale={[0.33, 0.33, 0.33]}>
        <mesh castShadow
          receiveShadow geometry={nodes.Cube003.geometry} material={nodes.Cube003.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube003_1.geometry} material={nodes.Cube003_1.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube003_2.geometry} material={nodes.Cube003_2.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube003_3.geometry} material={nodes.Cube003_3.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube003_4.geometry} material={nodes.Cube003_4.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube003_5.geometry} material={nodes.Cube003_5.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube003_6.geometry} material={nodes.Cube003_6.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube003_7.geometry} material={materials['car2-body']} />
      </group>
      <group position={[2.84, 0.37, 2.87]} rotation={[Math.PI / 2, 0, 2.35]} scale={[0.14, 0.14, 0.14]}>
        <mesh castShadow
          receiveShadow geometry={nodes.hydrantfast2obj_1.geometry} material={materials['hydrant-red']} />
        <mesh castShadow
          receiveShadow geometry={nodes.hydrantfast2obj_2.geometry} material={materials['hydrant-white']} />
      </group>
      <mesh
        geometry={nodes['parking-spot003'].geometry}
        material={materials['Material.001']}
        position={[-0.37, 0, 4.03]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes['pedestrian-crossing'].geometry}
        material={materials['Material.002']}
        position={[1.95, 0, 4.19]}
      />
    </group>
  )
}

