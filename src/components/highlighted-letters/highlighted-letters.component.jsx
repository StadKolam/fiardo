import React from 'react';
import highlightedLetters from './highlightedLetters'
import HighLightedLetter from '../3D-components/highlighted-letter/highlighted-letter.component'

export default function HighLightedLetters(props) {
    return (
        <>
            {highlightedLetters.map(({ id, ...otherCollectionProps }) => (
                <HighLightedLetter key={id} {...otherCollectionProps} />
            ))}
        </>
    )
}
