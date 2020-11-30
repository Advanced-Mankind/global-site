import React from 'react';
import './styles.css'

const HaveAChallenge = ({ icon, caption, headline, paragraph }) => {
    return (
        <div className="cardContainer">
            <div className="iconStyle">
                <img src={icon} alt={icon} />
            </div>
            <h3 className="caption">
                {caption}
            </h3>
            <h1 className="headline">
                {headline}
            </h1>
            <p className="paragraph">
                {paragraph}
            </p>
        </div>
    )
}

export default HaveAChallenge;
