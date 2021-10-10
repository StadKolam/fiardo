import React from 'react';
import ControllerButton from '../controller-button/controller-button.component';
import { Responsive } from '../responsive/responsive.component';
import './controller.styles.scss'

const Controller = (props) => {
    return (
        <>
            <Responsive displayIn={["Mobile", "Tablet"]}>
                <div className="controller-upper-part">
                    <ControllerButton id="reset-controller-button" buttonText={"reset"} />

                </div>
                <div className='controller-low-part'>
                    <div className='controller-left'>
                        <ControllerButton id="forward-controller-button" />
                        <ControllerButton id="break-controller-button" buttonText={"brake"} />
                        <ControllerButton id="down-controller-button" direction="down" />
                    </div>
                    <div className='controller-right'>
                        <div className="select-button">

                            <ControllerButton id="select-controller-button" buttonText={"select"} />
                        </div>
                        <div className="right-buttons">
                            <ControllerButton id="right-controller-button" direction="right" />
                            <ControllerButton id="left-controller-button" direction="left" />
                        </div>

                    </div>
                </div>
            </Responsive>
        </>
    )
}

export default Controller;