import React from 'react';

import { Joystick } from 'react-joystick-component';
import { Responsive } from '../../responsive/responsive.component';

import './joystick.styles.scss'
const JoyStickComponent = (props) => {
    return (
        <>


            <Responsive displayIn={["Mobile", "Tablet"]}>
                <div className='joystick'>
                    <Joystick size={50} />
                </div>
            </Responsive>
        </>
    )
}

export default JoyStickComponent