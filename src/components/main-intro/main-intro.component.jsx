import React from 'react';
import useHomeStore from '../../zustand/home-page-store';
import './main-intro.styles.scss';

export default function MainIntro() {
    const { clicked, setClicked } = useHomeStore();
    return (
        <div className={`main-intro ${clicked && 'clicked'}`} onClick={() => setClicked()}>
            <div className="text-box-main-intro">
                <div className="intro-title">

                    <h1>Welcome to Fiardo! </h1>
                </div>
                <div className="introduction-text" >

                    This is a single page application developed by Adam Szécsi-Tisza.
                    On the homepage you will find a 3D drive-in movie screen where you can drive the blue car to a parking spot and view the trailer videos by driving through the letters or by simply clicking on them to jump to the subpage.
                    <br></br>
                    You have the following options:

                </div>
                <ul>
                    <li>Selecting letter R brings you to the record-page</li>
                    <li>Selecting letter A brings you to the about-page</li>
                    <li>Selecting letters F, I, D, O bring you to the coming-soon-page (currently under construction)</li>
                </ul>
                <div className="clicking-box">

                    <p className="clicking-text" >Click to continue!</p>
                </div>
            </div>
        </div>

    )
}