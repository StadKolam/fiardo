import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function Screen({ url, videoUpdate, ...props }) {
  const group = useRef();
  const [movie, setMovie] = useState(true);

  const { nodes, materials } = useGLTF('/screen_draco.glb');


  const [video] = useState(() => {
    const vid = document.createElement('video');
    vid.src = url;
    vid.crossOrigin = 'Anonymous';
    vid.loop = true;
    vid.muted = true;
    vid.autoplay = true;
    vid.preload = "auto"
    return vid;
  });

  useEffect(() => {
    video.muted = true;
    video.src = url;
    video.load();
    video.play();
  }, [url, video]);

  // useEffect(() => void (video.play()), [video]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onClick={() => {
        setMovie(!movie);
      }}
    >
      <group position={[0, 1.69, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.screen001.geometry}
          material={materials['screen-frame']}
        />
        <mesh
          castShadow
          receiveShadow
          rotation={[0, 0, Math.PI]}
          position={[-1.2, 1.1, 0]}
          geometry={nodes.screen001_1.geometry}
        >
          <meshBasicMaterial toneMapped={false}>
            <videoTexture
              attach="map"
              args={[video]}
              encoding={THREE.sRGBEncoding}
            />
          </meshBasicMaterial>
        </mesh>
      </group>
    </group>
  );
}

