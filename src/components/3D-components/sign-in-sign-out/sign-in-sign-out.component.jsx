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
    position: [-8, 20, -4],
    rotation: [-Math.PI / 2, Math.PI / 2, Math.PI / 2],
    args: [2.2, 1.8, 0.2],
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
      onPointerOver={onPointerOver}
      onPointerOut={(e) => (setHovered(null))}
      onClick={props.signOut ? signOut : handleClick}
      font="/Bungee-Regular.ttf" fontSize={1} letterSpacing={-0.06}

    >
      {fileName}
      <meshStandardMaterial color={'#C5913A'} />
    </Text>
  );
}
