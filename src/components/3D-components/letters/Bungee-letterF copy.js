import React, { useEffect, useState, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { useConvexPolyhedron, useTrimesh, useBox } from '@react-three/cannon';

export default function BungeeLetter(props) {
  const { fileName, linkUrl, annotation } = { ...props };
  const [hovered, setHovered] = useState();

  const { nodes, materials } = useGLTF(fileName);
  const geo = useMemo(() => createTrimesh(nodes.Text.geometry), [nodes]);
  useEffect(() => {
    if (hovered) group.current.children[0].material.color.set('white');
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  function createTrimesh(geometry) {
    const vertices = geometry.attributes.position.array;
    const indices = geometry.index.array;
    return [vertices, indices];
  }

  const [group] = useTrimesh(() => ({
    mass: 1,
    ...props,
    args: geo,
  }));
  // const [group] = useBox(() => ({
  //   mass: 1,
  //   ...props,
  //   args: [0.5, 1, 3],
  // }));
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      // onPointerOver={(e) => (e.stopPropagation(), set(e.object.name))}
      // onPointerOut={(e) => (e.stopPropagation(), set(null))}
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
