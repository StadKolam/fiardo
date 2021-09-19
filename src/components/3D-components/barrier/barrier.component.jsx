import React from 'react';
import { useBox } from '@react-three/cannon';


export default function Barrier({ args, ...props }) {

    const [ref] = useBox(() => ({
        mass: 1,
        type: 'Static',
        collisionResponse: 1,
        args,
        ...props,
    }));

    return <mesh ref={ref} {...props}></mesh>;
}