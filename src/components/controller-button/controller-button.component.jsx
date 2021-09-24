import React, { useState } from 'react';
import { HiArrowCircleUp } from 'react-icons/hi'
import { FaRedo } from 'react-icons/fa'
import './controller-button.styles.scss'

const ControllerButton = ({ direction, rectangle, ...otherProps }) => {
    const [buttonColor, setColor] = useState('white')
    const onMouseDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('I am being pushed')
        setColor('yellow')
    }
    const onMouseUp = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('I was released')
        setColor('white')
    }

    return (
        <div
            className={`controller-button ${direction}`}
        >
            <HiArrowCircleUp onTouchStart={onMouseDown} onTouchEnd={onMouseUp} className={`${direction}`} size={50} color={buttonColor} style={{ transform: [{ rotateX: '180deg' }] }} />
        </div>)

}

export default ControllerButton;