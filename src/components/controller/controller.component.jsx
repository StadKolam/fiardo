import React, { useRef } from 'react';
import { Joystick } from 'react-joystick-component';
import ControllerButton from '../controller-button/controller-button.component';
import { Responsive } from '../responsive/responsive.component';

import './controller.styles.scss'

const Controller = (props) => {

    const keys = useRef({
        forward: false,
        backward: false,
        left: false,
        right: false,
        brake: false,
        reset: false,
        enter: false
    });

    return (
        <>
            <Responsive displayIn={["Mobile", "Tablet"]}>
                <div className='controller'>
                    <div className='controller-left'>
                        <ControllerButton />
                        <ControllerButton direction="down" />

                    </div>
                    <div className='controller-center'>

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