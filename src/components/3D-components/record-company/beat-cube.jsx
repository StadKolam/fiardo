import React, { useRef, useState, useEffect } from 'react'



export default function BeatCube(props) {
    const mesh = useRef()
    const { index, stepIndex, updateStep } = { ...props }

    const [active, setActive] = useState(false)
    const [hovered, setHovered] = useState();
    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto';
    }, [hovered]);
    function onPointerOver(e) {
        e.stopPropagation()
        setHovered(true)
    }



    return (
        <mesh
            {...props}
            ref={mesh}
            onPointerOver={onPointerOver}
            onPointerOut={(e) => (setHovered(null))}
            onClick={() => {
                setActive(!active)
                updateStep(index, stepIndex)
            }}
        >
            <boxGeometry args={[0.1, 0.85, 0.4]} />
            <meshStandardMaterial color={active ? 'orange' : 'black'} />
        </mesh>
    )
}