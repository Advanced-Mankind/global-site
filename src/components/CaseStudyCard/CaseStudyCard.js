import React from "react";
import "./styles.css";

const CaseStudyCard = ({ imgsDesktop, imgsTablet, text }) => {
  return (
    <>
      <div className="hoverImg CaseStudyCard caseStudyCardDesktop">
        <div className="text-card">
          {text} <div className="text-card-background"></div>
        </div>

        {imgsDesktop.map((img, index) => (
          <img src={img} alt={index} key={index} className="imgDesktop" />
        ))}
      </div>
      <div className="hoverImg CaseStudyCard caseStudyCardTablet">
        <div className="text-card">
          {text} <div className="text-card-background"></div>
        </div>
        {imgsTablet.map((img, index) => (
          <img src={img} alt={index} key={index} className="imgTablet" />
        ))}
      </div>
    </>
  );
};

export default CaseStudyCard;
