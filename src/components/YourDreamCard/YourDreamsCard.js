import React from 'react';
import './styles.css';

const YourDreamCards = ({ title, subtitle, imgDesktop, imgTablet, info }) => {
    return (
        <div className="cardBox">
           
            <img
                src={imgDesktop}
                className="cardImgDesktop"
                alt=""
            />
            <img
                src={imgTablet}
                className="cardImgTablet"
                alt=""
            />
             <h4 className="cardTitle">
                {title}
            </h4>
            <h4 className="cardSubtitle">
                {subtitle}
            </h4>
            <p className="cardInfo">
                {info}
            </p>
        </div>
    )
}

export default YourDreamCards
