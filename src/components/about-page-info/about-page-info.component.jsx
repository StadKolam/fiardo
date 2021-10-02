import React from 'react';
import "./about-page-info.styles.scss";
export default function AboutPageInfo() {
    return (
        <div className="container">
            <img class="container__image" src="/author_img.jpeg" />
            <div className="container__text">
                <h2>Why Do Cats Like Boxes?</h2>
                <p>"Cats like boxes because they are cryptic animals; they like to hide," Stephen Zawistowski, science adviser for the American Society for the Prevention of Cruelty to Animals, told Business Insider. "And a box gives them a place of safety and security."</p>
            </div>
        </div>

    )
}