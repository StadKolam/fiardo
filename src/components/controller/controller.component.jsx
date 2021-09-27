import React, { useEffect, useRef } from 'react';
import { HiCubeTransparent } from 'react-icons/hi';
import { Joystick } from 'react-joystick-component';
import JoyStickComponent from '../3D-components/joystick/joystick.component';
import ControllerButton from '../controller-button/controller-button.component';
import { Responsive } from '../responsive/responsive.component';
import { useControls } from '../utils/useControls'
import './controller.styles.scss'

const Controller = (props) => {

    const controls = useControls()

    useEffect(() => {
        console.log(controls)
    })

    return (
        <>
            <Responsive displayIn={["Mobile", "Tablet"]}>
                <div className='controller'>
                    <div className='controller-left'>
                        <ControllerButton />
                        <ControllerButton buttonText={"brake"} />
                        <ControllerButton direction="down" />

                    </div>
                    <div className='controller-center'>
                        <ControllerButton buttonText={"reset"} />
                    </div>
                    <div className='controller-right'>

                        <ControllerButton direction="right" />
                        <ControllerButton direction="left" />
                    </div>
                </div>
            </Responsive>
        </>
    )
}

export default Controller;