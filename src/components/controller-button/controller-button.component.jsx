import React, { useState } from 'react';
import { HiArrowCircleUp } from 'react-icons/hi'
import './controller-button.styles.scss'

const ControllerButton = ({ id, direction, buttonText, directionRef, ...otherProps }) => {
    const [buttonColor, setColor] = useState('white')
    const onTouchStart = (e) => {
        e.stopPropagation()
        setColor('yellow')
    }
    const onTouchEnd = (e) => {
        e.stopPropagation()
        setColor('white')
    }

    return (

        <div
            id={id}
            className={`controller-button ${direction} ${buttonText}`}
        >
            {!buttonText ? (

                <HiArrowCircleUp onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} className={`${direction}`} size={50} color={buttonColor} style={{ transform: [{ rotateX: '180deg' }] }} />
            ) :
                <div>{buttonText}</div>
            }
        </div>)

}

export default ControllerButton;