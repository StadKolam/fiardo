import { useGLTF } from '@react-three/drei'
import { useBox } from '@react-three/cannon';

export default function MovingBar(props) {
  const { nodes, materials } = useGLTF('/moving-bar_draco.glb', "https://www.gstatic.com/draco/versioned/decoders/1.4.0/")

  const [ref] = useBox(() => ({
    mass: 0.1,
    type: 'Dynamic',
    args: [0.1, 0.4, 1],
    ...props,
  }));

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh castShadow
        receiveShadow geometry={nodes['moving-bar_1'].geometry} material={materials['moving-bar-body']} />
      <mesh castShadow
        receiveShadow geometry={nodes['moving-bar_2'].geometry} material={materials['moving-bar-arm']} />
    </group>
  )
}