import React from 'react';
import './styles.css'

const CaseStudyCard = ({imgsDesktop, imgsTablet }) => {

    return (
        <>
            <div className="hoverImg caseStudyCardDesktop">
                {imgsDesktop.map((img, index) => <img src={img} alt={index} key={index} className="imgDesktop" />)}
            </div>
            <div  className="hoverImg caseStudyCardTablet">
                {imgsTablet.map((img, index) => <img src={img} alt={index} key={index} className="imgTablet"/>)}
            </div>
        </>
    )
}

export default CaseStudyCard;