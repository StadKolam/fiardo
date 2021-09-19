import React from 'react';

import './about-menu-item.styles.scss';

const AboutMenuItem = ({ title, imageUrl }) => {
    return (
        <div
            className="about-menu-item"
        >
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
            </div>
        </div>
    );
}

export default AboutMenuItem;

