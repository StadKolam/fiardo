import WithThree from '../../components/3D-components/with-three/with-three.component';
import RecordScene from './record-page.scene';
import { useThree, useFrame } from '@react-three/fiber';

const RecordPage = WithThree(() => {

    const { viewport } = useThree()
    useFrame((state) => {
        if (viewport.aspect) {
            state.camera.zoom = viewport.aspect > 1 ? 45 : 70 * (1 - viewport.aspect)
        }
        state.camera.updateProjectionMatrix()
    })
    return (<RecordScene />)

})
export default RecordPage;