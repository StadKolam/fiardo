import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function FiardoRecordsLogo(props) {
    const group = useRef()
    const logo = useRef()
    const { nodes, materials } = useGLTF('/fiardo-records_draco.glb', "https://www.gstatic.com/draco/versioned/decoders/1.4.0/")
    return (
        <>
            <group ref={group} {...props} dispose={null}>
                <mesh ref={logo} castShadow
                    receiveShadow geometry={nodes.Text.geometry} material={materials['fiardo-company-text']}>
                    <meshStandardMaterial color={'#eb34cf'} transparent opacity={0.8} />
                </mesh>
            </group>

        </>
    )
}