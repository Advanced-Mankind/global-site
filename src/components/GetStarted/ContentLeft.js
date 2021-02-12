import React from "react";
import CircleImage from "../CircleImage/CircleImage";
import "./GetStarted.css";
const data = [
  {
    name: "Test Name 0",
    text: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"`,
    company: "Object Edge",
    img: require("../../../static/profile1.png"),
  },
  {
    name: "Test Name 1",
    text: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"`,
    company: "Object Edge",
    img: require("../../../static/profile1.png"),
  },
  {
    name: "Test Name 2",
    text: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry"`,
    company: "Object Edge",
    img: require("../../../static/profile1.png"),
  },
  {
    name: "Test Name 3",
    text: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"`,
    company: "Object Edge",
    img: require("../../../static/profile1.png"),
  },
];
const ContentLeft = () => {
  return (
    <div className="contentLeftContainer">
      <h1 className="titleGetStarted">
        Let’s start building your tomorrow, today.
      </h1>
      <p className="subtitleGetStarted">
        We’re ready to dig in and do great work for you. Submit our quick form
        to see for yourself.
      </p>
      <ul className="ulIconGetStarted">
        <li>Full Service</li>
        <li>Simple Approach</li>
        <li>Happy Users</li>
      </ul>
      <hr />
      <h3 className="headline">Delivering valuable experiences is our jam.</h3>

      <div className="iconContainer">
        <CircleImage data={data} />
      </div>
    </div>
  );
};

export default ContentLeft;
