import React from "react";
import CircleImage from "../CircleImage/CircleImage";
import "./GetStarted.css";
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
      <p className="quote">
        “We value our partnership with Advncd Manknd. Their team is always
        responsive to our needs and provide extraordinary service on every
        engagement.”
      </p>
      <div className="w-100 d-flex">
        <h4 className="captionBold">Kelly Rader</h4>
        <h4 className="caption">, Object Edge</h4>
      </div>
      <div className="iconContainer">
        <CircleImage
          img={[
            require("../../../static/profile1.png"),
            require("../../../static/profile2.png"),
            require("../../../static/profile3.png"),
            require("../../../static/profile4.png"),
          ]}
        />
      </div>
    </div>
  );
};

export default ContentLeft;
