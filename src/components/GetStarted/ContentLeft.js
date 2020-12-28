import React from "react";
import Partners from "../../components/Partners/Partners";
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
        <li>simple Approach</li>
        <li>Happy Users</li>
      </ul>
      <hr />
      <h3 className="headline">Delivering valuable experiences is our jam.</h3>
      <p className="quote">
        “Advanced Mankind built customer service solutions that mimicked
        human-to-human dialogue so our customers could communicate the way they
        do with other humans while maintaining the context of the conversation.”
      </p>
      <h4 className="caption">Charlie Mann, Social VP of Marketing</h4>
      <div className="iconContainer">
        <CircleImage img={require("../../../static/heart.png")} />
        <CircleImage img={require("../../../static/heart.png")} />
        <CircleImage img={require("../../../static/heart.png")} />
        <CircleImage img={require("../../../static/heart.png")} />
      </div>
      <Partners
        imgs={[
          require("../../../static/Hyundai.png"),
          require("../../../static/Canon.png"),
          require("../../../static/chedrahui.png"),
          require("../../../static/coxmedia.png"),
        ]}
      />
    </div>
  );
};

export default ContentLeft;
