import React from "react";
import "./styles.css";

const CircleImage = ({ img }) => {
  return (
    <div>
      <img
      className="avatar mr-3"
      src={img[0]}
      alt="Ilustration"
    />
    <img
      className="avatar mr-3"
      src={img[1]}
      alt="Ilustration"
    />
    <img
      className="avatar mr-3"
      src={img[2]}
      alt="Ilustration"
    />
    <img
      className="avatar mr-3"
      src={img[3]}
      alt="Ilustration"
    />
    </div>
  );
};

export default CircleImage;
