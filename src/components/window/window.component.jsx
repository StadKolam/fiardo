import React, { useState } from "react";

import './window.styles.scss';

export default function Window(props) {
    const { index, stepIndex, updateStep, currentColumn } = { ...props }

    const [active, setActive] = useState(false)

    return (
        <div
            key={`step-${index}-${stepIndex}`}
            onClick={() => {
                setActive(!active)
                updateStep(index, stepIndex);
            }}
            className={`window ${active ? 'active' : ''} ${stepIndex === currentColumn && 'playing'}`}

        />
    )
}