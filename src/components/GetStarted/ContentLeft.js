import React from "react";
import CircleImage from "../CircleImage/CircleImage";
import "./GetStarted.css";
const data = [
  {
    name: "Kelly Rader",
    text: `“We value our partnership with Advncd Manknd. Their team is
    always responsive to our needs and provide extraordinary
    service on every engagement.”`,
    company: "Object Edge",
    img: require("../../../static/profile3.png"),
  },
  {
    name: "Chris Giametta",
    text: `"Working with the teams at AM has been a true pleasure. A combination of talented graphical artists and technology experts was crucial in designing & deploying our sports management platform AnyClub. Our continued partnership has allowed us to focus on our business while they make the pixels perfect." `,
    company: "CEO AnyClub",
    img: require("../../../static/chris.png"),
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
