import React from "react";
import "./styles.css";

const Card = ({ icon, headline, paragraph }) => {
  return (
    <div className="cardContainer">
      <img src={icon} alt={icon} />
      <h6 className="cardTitleHero mt-4"> {headline} </h6>
      <p className="cardParagraph"> {paragraph} </p>
    </div>
  );
};

export default Card;
