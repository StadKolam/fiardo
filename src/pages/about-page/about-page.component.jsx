import React from 'react';
import './about-page.styles.scss';
import FlipCard from '../../components/flip-card/flip-card.component';
import ContactForm from '../../components/contact-form/contact-form.component';
import AboutMenuItem from '../../components/about-menu-item/about-menu-item.component';
import AboutPageInfo from '../../components/about-page-info/about-author-info.component';
import AboutAuthorInfo from '../../components/about-author-info/about-author-info.component';

const AboutPage = () => {
    return (
        <div className='about-page'>
            <div className="about-page-boxes">

                <div className="wrapper">

                    <div className="box-elememt">

                        {/* <AboutMenuItem id="about-site" title="about site" imageUrl="homepage-pic.png" /> */}
                        {/* <AboutPageInfo /> */}


                        {/* <AboutMenuItem id="about-author" key='1' title="about author" imageUrl="coming-soon.png" /> */}
                        {/* <AboutMenuItem title="about site" imageUrl="homepage-pic.png" /> */}
                        <AboutPageInfo />
                    </div>

                </div>
                <div className="box3">
                    <ContactForm />
                </div>

            </div>
        </div>
    )
}


export default AboutPage;