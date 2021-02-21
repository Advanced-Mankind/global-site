import React from "react";
import "./HaveAChallenge.css";

const HaveAChallenge = ({ icon, caption, headline, paragraph }) => {
  return (
    <div className="cardContainerChallenge">
      <div className="iconStyleChallenge">
        <img src={icon} alt={icon} />
      </div>
      <h3 className="captionChallenge">{caption}</h3>
      <h1 className="headlineChallenge mt-0">{headline}</h1>
      <p className="paragraphChallenge">{paragraph}</p>
    </div>
  );
};

export default HaveAChallenge;
