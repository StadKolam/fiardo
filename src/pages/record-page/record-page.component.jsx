import WithThree from '../../components/3D-components/with-three/with-three.component';
import RecordScene from './record-page.scene';
import { useThree, useFrame } from '@react-three/fiber';

const RecordPage = WithThree(() => {

    const { viewport } = useThree()
    useFrame((state) => {
        state.camera.zoom = viewport.aspect > 0.6 ? 40 : 15
        state.camera.updateProjectionMatrix()
    })
    return (<RecordScene />)

})
export default RecordPage;