import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';
import useHomeStore from '../../../zustand/home-page-store';
import { Auth } from 'aws-amplify';

export default function SignFunctions(props) {
  const { fileName, linkUrl, signInReq } = {
    ...props,
  };


  const [hovered, setHovered] = useState();
  const { user, reqSignIn, setUser, noReqSignIn } = useHomeStore();
  const { nodes, materials } = useGLTF(fileName);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  const [group] = useBox(() => ({
    mass: 1,
    ...props,
    position: [6, 10, -8],
    rotation: [0, Math.PI / 3, Math.PI / 6],
    args: [2, 0.25, 1.5],
  }));

  const handleClick = () => {
    if (signInReq && !user) {
      reqSignIn();
      return null;
    }
    window.appHistory.push(linkUrl);
  };

  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
      setUser(undefined);
      noReqSignIn();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };
  function onPointerOver(e) {
    e.stopPropagation()
    setHovered(true)
  }
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={onPointerOver}
      onPointerOut={(e) => (setHovered(null))}
      onClick={props.signOut ? signOut : handleClick}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials['text-body']}
      />
    </group>
  );
}
