import React, { useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei';

import useHomeStore from '../../../zustand/home-page-store';

export default function HighLightedLetter({ fileName, linkUrl, ...props }) {
  const { videoData, signInReq } = { ...props };
  const { setVideo, setLink, user, reqSignIn } = useHomeStore();
  const { nodes } = useGLTF(fileName);
  const [hovered, setHovered] = useState();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const z = Math.cos(4 * t) * 0.1;
    ref.current.material.opacity = z + 0.5;
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  const [ref] = useBox(() => ({
    mass: 1,
    type: 'Static',
    collisionResponse: 0,
    args: [0.8, 0.2, 1],
    onCollide: onCollide,
    ...props,
  }));

  const onCollide = (e) => {
    setVideo(videoData)
    setLink(linkUrl)
  };

  const handleClick = () => {
    if (signInReq && !user) {
      reqSignIn();
      return null;
    }
    window.appHistory.push(linkUrl);
  };

  function onPointerOver(e) {
    e.stopPropagation()
    setHovered(true)
  }

  return (
    <mesh
      ref={ref}
      {...props}
      scale={[0.3, 0.3, 0.3]}
      castShadow
      receiveShadow
      geometry={nodes.Text.geometry}
      onPointerOver={onPointerOver}
      onPointerOut={(e) => (setHovered(null))}
      onClick={handleClick}
    >
      <meshStandardMaterial color={'#03e3fc'} transparent opacity={0.5} />
    </mesh>
  );
}
