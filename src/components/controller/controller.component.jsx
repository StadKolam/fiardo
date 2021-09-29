import React, { useEffect, useRef } from 'react';
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
                        <ControllerButton id="forward-controller-button" />
                        <ControllerButton id="break-controller-button" buttonText={"brake"} />
                        <ControllerButton id="down-controller-button" direction="down" />
                    </div>
                    <div className='controller-right'>
                        <ControllerButton id="right-controller-button" direction="right" />
                        <ControllerButton id="left-controller-button" direction="left" />
                    </div>
                </div>
            </Responsive>
        </>
    )
}

export default Controller;