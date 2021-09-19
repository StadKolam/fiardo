import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';
import useStore from '../../../zustand/store';
import { Auth } from 'aws-amplify';

export default function BungeeLetter(props) {
  const { fileName, linkUrl, annotation, signInReq } = {
    ...props,
  };
  const [video] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/drei.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
    })
  );

  const [hovered, setHovered] = useState();
  const { user, reqSignIn } = useStore();
  const setUser = useStore((state) => state.setUser);
  const noReqSignIn = useStore((state) => state.noReqSignIn);
  const setAnnotation = useStore((state) => state.setAnnotation);
  const { nodes, materials } = useGLTF(fileName);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    let annBungee = hovered ? annotation : undefined;
    setAnnotation(annBungee);
  }, [hovered]);

  const [group] = useBox(() => ({
    mass: 1,
    ...props,
    args: [2.5, 0.5, 3],
  }));
  const handleClick = () => {
    console.log(user);
    if (signInReq && !user) {
      reqSignIn();
      return null;
    }
    setAnnotation();
    window.appHistory.push(linkUrl);
  };
  const signOut = async () => {
    console.log('mukodom');
    try {
      await Auth.signOut({ global: true });
      setUser(undefined);
      noReqSignIn();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => (e.stopPropagation(), setHovered(null))}
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
