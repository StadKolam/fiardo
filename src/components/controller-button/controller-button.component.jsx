import React, { useState } from 'react';
import { HiArrowCircleUp } from 'react-icons/hi'
import { FaRedo } from 'react-icons/fa'
import './controller-button.styles.scss'

const ControllerButton = ({ id, direction, rectangle, directionRef, ...otherProps }) => {
    const [buttonColor, setColor] = useState('white')
    const onMouseDown = (e) => {

        setColor('yellow')
        directionRef = true;
        console.log(directionRef)
    }
    const onMouseUp = (e) => {


        setColor('white')
        directionRef = false;
        console.log(directionRef)

    }

    return (
        <div
            id={id} className={`controller-button ${direction}`}
        >
            <HiArrowCircleUp onTouchStart={onMouseDown} onTouchEnd={onMouseUp} className={`${direction}`} size={50} color={buttonColor} style={{ transform: [{ rotateX: '180deg' }] }} />
        </div>)

}

export default ControllerButton;