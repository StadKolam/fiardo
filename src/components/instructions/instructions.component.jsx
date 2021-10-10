import React, { useState } from 'react'
import './instructions.styles.scss';
import instructionsData from './instructions.data';
import { FaWindowClose } from 'react-icons/fa';
import { getWindowDimension } from '../utils/responsiveUtil'
function Instructions({ instText, isRight, ...props }) {
    const [hidden, setHidden] = useState(false)
    const { width } = getWindowDimension();

    return (
        <div className={`${hidden ? 'hidden' : ''} ${isRight ? 'right' : ''
            } instructions`}>
            <FaWindowClose className='close-icon' onClick={() => setHidden(true)} />

            <h3>Instructions</h3>
            <p>
                {
                    width > 640 ? instructionsData[instText][0] : instructionsData[instText][1]
                }
            </p>
        </div>
    )
}

export default Instructions;