import React, { useRef } from 'react';

import { Joystick } from 'react-joystick-component';
import { Responsive } from '../../responsive/responsive.component';

import './joystick.styles.scss'
const JoyStickComponent = (props) => {
    const joystickEvent = (event) => {
        console.log(event)
        // const keys = useRef({
        //     forward: false,
        //     backward: false,
        //     left: false,
        //     right: false,
        //     brake: false,
        //     reset: false,
        //     enter: false
        // });
        //         const direction = event.direction.toLowerCase();
        //         // backward down
        //         const newDirection =
        //           direction === "forward"
        //             ? "top"
        //             : direction === "backward"
        //             ? "down"
        //             : direction;
        //         return keys;
    }


    // function useControls() {
    //     const keys = useRef({
    //         forward: false,
    //         backward: false,
    //         left: false,
    //         right: false,
    //         brake: false,
    //         reset: false,
    //         enter: false
    //     });
    //     useKeyPress(['ArrowUp', 'w'], (pressed) => (keys.current.forward = pressed));
    //     return keys;
    // }
    return (
        <>


            <Responsive displayIn={["Mobile", "Tablet"]}>
                <div className='joystick'>
                    <Joystick size={50} move={joystickEvent} />
                </div>
            </Responsive>
        </>
    )
}

export default JoyStickComponent