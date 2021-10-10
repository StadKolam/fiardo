import React from 'react';
import './about-page.styles.scss';
import ContactForm from '../../components/contact-form/contact-form.component';
import AboutPageInfo from '../../components/about-page-info/about-page-info.component';
const AboutPage = () => {
    return (
        <div className='about-page'>
            <div className="about-page-boxes">
                <div className="wrapper">
                    <AboutPageInfo />
                </div>
                <div className="box3">
                    <ContactForm />
                </div>

            </div>
        </div>
    )
}


export default AboutPage;