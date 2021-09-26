import React, { useEffect, useState } from 'react';
import { useGLTF, Text } from '@react-three/drei';
import { useBox } from '@react-three/cannon';
import useHomeStore from '../../../zustand/home-page-store';
import { Auth } from 'aws-amplify';

export default function SignFunctions(props) {
  const { fileName, linkUrl, signInReq } = {
    ...props,
  };


  const [hovered, setHovered] = useState();
  const { user, reqSignIn, setUser, noReqSignIn } = useHomeStore();

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  const [group] = useBox(() => ({
    mass: 1,
    ...props,
    position: [6, 20, 6],
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
    <Text
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={onPointerOver}
      onPointerOut={(e) => (setHovered(null))}
      onClick={props.signOut ? signOut : handleClick}
      font="/Bungee-Regular.ttf" fontSize={1.5} letterSpacing={-0.06}

    >
      {fileName}
      <meshStandardMaterial color={'C5913A'} />
    </Text>
  );
}
