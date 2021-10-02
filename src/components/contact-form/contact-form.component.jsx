import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaAt } from 'react-icons/fa';
import EmailComponent from '../email-component/email.component';
import './contact-form.styles.scss';

export default function ContactForm() {
    function onLinkedinClick() {
        window.open('https://www.linkedin.com/in/adam-szecsi-tisza', '_blank');
    }
    function onGitHubClick() {
        window.open('https://github.com/StadKolam', '_blank');
    }

    return (<div className='contact-form'>
        <FaLinkedin className='fa-logo linkedin' size={40} onClick={onLinkedinClick} />
        <FaGithub className='fa-logo github' size={40} onClick={onGitHubClick} />
        <EmailComponent />
    </div>)
}