import React from 'react';
import { FaLinkedin, FaGithub, FaAt } from 'react-icons/fa';

import './contact-form.styles.scss';

export default function ContactForm() {

    function onLinkedinClick() {
        window.open('https://www.linkedin.com/in/adam-szecsi-tisza', '_blank');
    }
    function onGitHubClick() {

        console.log('github')
    }

    function onAtClick() {
        navigator.clipboard.writeText('szecsitisza.adam@gmail.com')
    }



    return (<div className='contact-form'>
        <h3>Contact Me</h3>
        <div className='contact-icons'>

            <FaLinkedin className='contact-logo' size={40} onClick={onLinkedinClick} />
            <FaGithub className='contact-logo' size={40} onClick={onGitHubClick} />
            <FaAt className='contact-logo' size={40} onClick={onAtClick} />
        </div>
    </div>)
}