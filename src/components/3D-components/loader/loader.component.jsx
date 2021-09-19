import React from 'react'
import { Html } from '@react-three/drei'
import './loader.styles.css';

export default function Loader() {
    return (<Html center>
        <div className='loader'>
            <p>
                Loading...
            </p>
        </div>
    </Html>)
}