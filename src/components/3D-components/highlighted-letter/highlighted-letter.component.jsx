import React, { useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';
import { useGLTF, Text } from '@react-three/drei';

import useHomeStore from '../../../zustand/home-page-store';

export default function HighLightedLetter({ fileName, linkUrl, ...props }) {
  const { videoData, signInReq } = { ...props };
  const { setVideo, setLink, user, reqSignIn } = useHomeStore();
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
    args: [0.8, 1, 0.2],
    onCollide: onCollide,
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));

  const onCollide = (e) => {
    setVideo(videoData)
    setLink(linkUrl)
    console.log("valami")
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
    <Text
      {...props}
      ref={ref}
      onPointerOver={onPointerOver}
      onPointerOut={(e) => (setHovered(null))}
      onClick={handleClick}
      font="/Bungee-Regular.ttf" fontSize={1.2} letterSpacing={-0.06} >
      {fileName}
      <meshStandardMaterial color={'#6bf0ff'} transparent opacity={0.6} />
    </Text>
  );
}
