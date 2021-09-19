import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import useRecordPlayerStore from '../../../zustand/record-page-store';

export default function PlayPauseButton(props) {
  const group = useRef()
  const playPauseButton = useRef()
  const { nodes, materials } = useGLTF('/play-pause-button_draco.glb')
  const { playing, setPlaying } = useRecordPlayerStore();

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
  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <mesh castShadow
          receiveShadow
          onClick={onClickPlay}
          onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
          onPointerOut={(e) => (setHovered(null))}
          position={[0, 0, 0]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]} ref={playPauseButton} geometry={nodes.Plane.geometry} material={materials['play-pause-button']} >

          <meshStandardMaterial color={playing ? '#C5913A' : '#eb34cf'} transparent opacity={0.8} />
        </mesh>
      </group>
    </>
  )
}

