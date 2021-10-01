import React, { useState } from 'react';
import { FaAt } from 'react-icons/fa';
import './email.styles.scss'


export default function EmailComponent() {
    const [copied, setCopied] = useState(false)


    function onAtClick() {
        navigator.clipboard.writeText('szecsitisza.adam@gmail.com')
        setCopied(true)
    }



    return (<>



        {copied ? <div className="copied-flag">{"copied"}</div> : <FaAt className='contact-logo' size={40} onClick={onAtClick} />}

    </>)
}