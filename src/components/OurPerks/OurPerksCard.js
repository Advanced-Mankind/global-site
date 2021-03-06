import React from "react";
import "./styles.css";

const OurPerksCard = ({ icon, headline, paragraph }) => {
  return (
    <div className="ourPerkCardContainer">
      <img src={icon} alt={icon} />
      <h6 className="perkCardTitle mt-4"> {headline} </h6>
      <p className="cardParagraph"> {paragraph} </p>
    </div>
  );
};

export default OurPerksCard;
