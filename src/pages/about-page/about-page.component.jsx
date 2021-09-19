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
            <div className="about-page-grid">

                {/* <AboutMenuItem id="about-site" title="about site" imageUrl="homepage-pic.png" /> */}
                {/* <AboutPageInfo /> */}


                {/* <AboutMenuItem id="about-author" key='1' title="about author" imageUrl="coming-soon.png" /> */}
                {/* <AboutMenuItem title="about site" imageUrl="homepage-pic.png" /> */}


                <FlipCard id="about-site" title="About Site">
                    <AboutMenuItem key='0' title="about site" imageUrl="homepage-pic.png" />
                    <AboutPageInfo />

                </FlipCard>

                <FlipCard id="about-author" title="About Author">
                    <AboutMenuItem key='1' title="about author" imageUrl="coming-soon.png" />
                    <AboutAuthorInfo />
                </FlipCard>
                <div id='contact-me'>
                    <ContactForm />
                </div>

            </div>
        </div>
    )
}


export default AboutPage;