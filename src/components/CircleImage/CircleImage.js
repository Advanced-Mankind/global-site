import React from "react";
import "./styles.css";

const CircleImage = ({ img }) => {
  return (
    <img
      className="avatar mr-3"
      src={require("../../../static/people.png")}
      alt="Ilustration"
    />
  );
};

export default CircleImage;
