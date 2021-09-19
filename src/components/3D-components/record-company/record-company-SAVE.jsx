import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import useRecordPlayerStore from '../../../zustand/record-page-store';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export default function RecordCompany(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/record-company_draco.glb')
  const vec = new THREE.Vector3()
  const { zoom, playing, setPlaying } = useRecordPlayerStore();
  const [hovered, setHovered] = useState();

  const onClickPlay = () => {
    if (playing) {
      setPlaying(false)
    } else {
      setPlaying(true)
    }
  }

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);
  const propRef1 = useRef()
  const propRef2 = useRef()
  const vinyl = useRef()
  useFrame((state) => {
    propRef1.current.rotation.x += 0.08;
    propRef2.current.rotation.x += 0.01;
    vinyl.current.rotation.y -= 0.01;
    const step = 0.1
    state.camera.zoom = THREE.MathUtils.lerp(state.camera.zoom, zoom ? 100 : 50, step)

    state.camera.position.lerp(vec.set(zoom ? 25 : 8, zoom ? 15 : 8, zoom ? 0 : 8), step)

    state.camera.lookAt(0, 3, 0)
    state.camera.updateProjectionMatrix()
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[3.23, 0.53, -0.5]} rotation={[0, -Math.PI / 2, 0]} scale={[0.3, 0.3, 0.3]}>
        <mesh castShadow
          receiveShadow geometry={nodes.Cube002_1.geometry} material={materials['vehicle-body']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube002_2.geometry} material={materials['vehicle-bumper']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube002_3.geometry} material={materials['vehicle-plate']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube002_4.geometry} material={materials['vehicle-front-lamp']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube002_5.geometry} material={materials['vehicle-rear-lamp']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube002_6.geometry} material={materials['vehicle-window']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube002_7.geometry} material={materials['vehicle-wheel']} />
        <mesh castShadow
          receiveShadow
          geometry={nodes.Text001.geometry}
          material={materials['vehicle-plate-text']}
          position={[-0.24, -0.5, 2.21]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={materials['vehicle-rear-plate-text']}
          position={[0.25, -0.5, -2.25]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        />
      </group>
      <group position={[3.25, 0.52, 2.47]} rotation={[0, -Math.PI / 2, 0]} scale={[0.3, 0.3, 0.3]}>
        <mesh castShadow
          receiveShadow geometry={nodes.Cube006.geometry} material={materials['vehicle-body.002']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube006_1.geometry} material={materials['vehicle-bumper.002']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube006_2.geometry} material={materials['vehicle-plate.002']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube006_3.geometry} material={materials['vehicle-front-lamp.002']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube006_4.geometry} material={materials['vehicle-rear-lamp.002']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube006_5.geometry} material={materials['vehicle-window.002']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube006_6.geometry} material={materials['vehicle-wheel.002']} />
        <mesh castShadow
          receiveShadow
          geometry={nodes.Text005.geometry}
          material={materials['vehicle-plate-text.002']}
          position={[-0.24, -0.5, 2.21]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh castShadow
          receiveShadow
          geometry={nodes.Text006.geometry}
          material={materials['vehicle-rear-plate-text.002']}
          position={[0.25, -0.5, -2.25]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        />
      </group>
      <mesh castShadow
        receiveShadow geometry={nodes.base.geometry} material={nodes.base.material} />
      <mesh castShadow
        receiveShadow geometry={nodes.asphalt_1.geometry} material={nodes.asphalt_1.material} />
      <mesh castShadow
        receiveShadow geometry={nodes.asphalt_2.geometry} material={materials['building.002']} />
      <mesh castShadow
        receiveShadow geometry={nodes.asphalt_3.geometry} material={materials['recycling-container']} />
      <mesh castShadow
        receiveShadow geometry={nodes.asphalt_4.geometry} material={materials['recycling-green']} />
      <mesh castShadow
        receiveShadow geometry={nodes.building003.geometry} material={nodes.building003.material} />
      <mesh castShadow
        receiveShadow geometry={nodes.asphalt002_1.geometry} material={nodes.asphalt002_1.material} />
      <mesh castShadow
        receiveShadow geometry={nodes.asphalt002_2.geometry} material={materials['lines.001']} />
      <mesh castShadow
        receiveShadow geometry={nodes.pavement_1.geometry} material={nodes.pavement_1.material} />
      <mesh castShadow
        receiveShadow geometry={nodes.pavement_2.geometry} material={nodes.pavement_2.material} />
      <mesh castShadow
        receiveShadow geometry={nodes.pavement_3.geometry} material={nodes.pavement_3.material} />
      <mesh castShadow
        receiveShadow geometry={nodes.asphalt002.geometry} material={materials.lines} />
      <group rotation={[0, Math.PI / 2, 0]}>
        <mesh castShadow
          receiveShadow geometry={nodes.pavement001_1.geometry} material={nodes.pavement001_1.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.pavement001_2.geometry} material={nodes.pavement001_2.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.pavement001_3.geometry} material={nodes.pavement001_3.material} />
      </group>
      <mesh castShadow
        receiveShadow geometry={nodes.base001.geometry} material={nodes.base001.material} />
      <group ref={vinyl} position={[-1.84, 3.18, 4.97]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow
          receiveShadow geometry={nodes.asphalt007.geometry} material={nodes.asphalt007.material} />
        <mesh castShadow
          receiveShadow geometry={nodes.asphalt007_1.geometry} material={materials['vinyl-outer.001']} />
        <mesh castShadow
          receiveShadow geometry={nodes.asphalt007_2.geometry} material={materials['vinyl-inner']} />
        <mesh castShadow
          receiveShadow
          geometry={nodes['viny-logo'].geometry}
          material={materials['vinyl-logo']}
          position={[0, 0.02, 0.47]}
        />
      </group>
      <group position={[-3.71, 6.09, 1.64]}>
        <mesh castShadow
          receiveShadow geometry={nodes.Cube001.geometry} material={materials['air-con']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube001_1.geometry} material={materials['air-con-machine']} />
      </group>
      <mesh ref={propRef1} castShadow
        receiveShadow
        geometry={nodes.prop1.geometry}
        material={nodes.prop1.material}
        position={[-3.43, 6.52, 2.93]}
        rotation={[Math.PI, 0, Math.PI / 2]}
      />
      <mesh ref={propRef2} castShadow
        receiveShadow
        geometry={nodes.prop2.geometry}
        material={nodes.prop2.material}
        position={[-3.43, 6.52, 2.49]}
        rotation={[Math.PI, 0, Math.PI / 2]}
      />
      <group position={[0.94, 5.96, 4.1]}>
        <mesh castShadow
          receiveShadow
          onClick={onClickPlay}
          onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
          onPointerOut={(e) => (setHovered(null))}
          geometry={nodes.Cube004.geometry} material={materials['play-button']} />
        <mesh castShadow
          receiveShadow geometry={nodes.Cube004_1.geometry} material={materials['play-func']} />
      </group>
      <group position={[8.99, 0.02, -1.86]} rotation={[0, 1.55, 0]}>
        <mesh castShadow
          receiveShadow geometry={nodes.asphalt008.geometry} material={materials['fire-hose']} />
        <mesh castShadow
          receiveShadow geometry={nodes.asphalt008_1.geometry} material={materials['fire-hose-2']} />
      </group>
      <mesh castShadow
        receiveShadow geometry={nodes.asphalt009.geometry} material={nodes.asphalt009.material} />
      <mesh castShadow
        receiveShadow geometry={nodes.asphalt009_1.geometry} material={materials.building} />
      <mesh castShadow
        receiveShadow geometry={nodes.asphalt009_2.geometry} material={materials.door} />
      <mesh castShadow
        receiveShadow
        geometry={nodes['company-name'].geometry}
        material={materials['company-name-material']}
        position={[0.93, 0.82, 4.09]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
    </group>
  )
}

