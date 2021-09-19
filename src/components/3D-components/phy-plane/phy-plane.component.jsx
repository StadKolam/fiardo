import React from 'react';
import { useBox } from '@react-three/cannon';

export default function PhyPlane({ args = [10, 1, 10], ...props }) {
  const [ref] = useBox(() => ({
    type: 'Static',
    args,
    ...props,
  }));

  return <mesh ref={ref}></mesh>;
}
