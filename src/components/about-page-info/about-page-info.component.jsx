import React from 'react';
import "./about-page-info.styles.scss";
import SvgFigure from '../svg-figure/svg-figure.component';
export default function AboutPageInfo() {
    return (
        <div className="container">
            <img className="container__image" alt="image" src={process.env.PUBLIC_URL + "/author.jpeg"} />
            <div className="container__text">
                <p>Hi!</p>
                <p>My name is Adam Szécsi-Tisza and I am the creator of Fiardo.com. If you have any questions that you would like to ask me personally, feel free to contact me.</p>
                <SvgFigure />
            </div>
        </div>

    )
}