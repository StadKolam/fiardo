import React, { useState } from 'react';
import { HiArrowCircleUp } from 'react-icons/hi'
import { FaRedo } from 'react-icons/fa'
import './controller-button.styles.scss'

const ControllerButton = ({ id, direction, buttonText, directionRef, ...otherProps }) => {
    const [buttonColor, setColor] = useState('white')
    const onMouseDown = (e) => {
        setColor('yellow')
    }
    const onMouseUp = (e) => {
        setColor('white')
    }

    return (

        <div
            id={id}
            className={`controller-button ${direction} ${buttonText}`}
        >
            {!buttonText ? (

                <HiArrowCircleUp onTouchStart={onMouseDown} onTouchEnd={onMouseUp} className={`${direction}`} size={50} color={buttonColor} style={{ transform: [{ rotateX: '180deg' }] }} />
            ) :
                <div>{buttonText}</div>
            }
        </div>)

}

export default ControllerButton;