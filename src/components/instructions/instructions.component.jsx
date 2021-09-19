import React, { useState } from 'react'
import './instructions.styles.scss';
import instructionsData from './instructions.data';
import { FaWindowClose } from 'react-icons/fa';

function Instructions({ instText, isRight, ...props }) {
    const [hidden, setHidden] = useState(false)

    return (
        <div className={`${hidden ? 'hidden' : ''} ${isRight ? 'right' : ''
            } instructions`}>
            <FaWindowClose className='close-icon' onClick={() => setHidden(true)} />
            <pre>
                Instructions
                <br />
                {instructionsData[instText]}
                <br />R to reset
            </pre>
        </div>
    )
}

export default Instructions;