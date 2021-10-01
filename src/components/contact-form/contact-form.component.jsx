import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaAt } from 'react-icons/fa';
import EmailComponent from '../email-component/email.component';
import './contact-form.styles.scss';

export default function ContactForm() {
    function onLinkedinClick() {
        window.open('https://www.linkedin.com/in/adam-szecsi-tisza', '_blank');
    }
    function onGitHubClick() {
        console.log('github')
    }


    return (<div className='contact-form'>



        <FaLinkedin className='contact-logo' size={40} onClick={onLinkedinClick} />
        <FaGithub className='contact-logo' size={40} onClick={onGitHubClick} />
        <EmailComponent />
    </div>)
}