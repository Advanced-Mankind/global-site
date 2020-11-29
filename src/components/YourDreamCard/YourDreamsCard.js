import React from 'react';
import styles from './styles.css';

const YourDreamCards = ({ title, subtitle, imgDesktop, imgTablet, info }) => {
    return (
        <div className="cardBox">
            <h4 className="cardTitle">
                {title}
            </h4>
            <h4 className="cardSubtitle">
                {subtitle}
            </h4>
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
            <p className="cardInfo">
                {info}
            </p>
        </div>
    )
}

export default YourDreamCards
