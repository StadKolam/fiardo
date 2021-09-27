import React, { useEffect, useRef } from 'react';

import { Joystick } from 'react-joystick-component';
import { Responsive } from '../../responsive/responsive.component';
import { useControls } from '../../utils/useControls';
import { useJoystick } from '../../utils/useJoyStick';
import './joystick.styles.scss'

import useControlStore from '../../../zustand/control-store';

const JoyStickComponent = (props) => {
    const { setKeys } = useControlStore();
    const joystickEvent = (event) => {




        if (event.direction == "LEFT") {
            setKeys("right", false)
            setKeys("left", true)
            setKeys("forward", true)
        } else if (event.direction == "RIGHT") {
            setKeys("left", false)
            setKeys("right", true)
            setKeys("forward", true)
        }

        console.log(event)

    }
    const onStop = (event) => {
        setKeys("forward", false)
        setKeys("brake", true)

        console.log(event)
    }

    return (
        <>


            <Responsive displayIn={["Mobile", "Tablet"]}>
                <div className='joystick'>
                    <Joystick size={50} move={joystickEvent} stop={onStop} />
                </div>
            </Responsive>
        </>
    )
}

export default JoyStickComponent