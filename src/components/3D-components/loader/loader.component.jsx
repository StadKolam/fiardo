import React from 'react'
import { Html, useProgress } from '@react-three/drei'
import './loader.styles.css';


export default function Loader() {
    const { progress } = useProgress()

    return (<Html center>
        <div className='loader'>
            <p>
                {Math.round(progress)} % loaded
            </p>
        </div>
    </Html>)
}