import React from "react";
import { Col } from "react-bootstrap";

const ContentLeft = () => {
  return (
    <>
      <Col className="imageMobile" xs={12} md={6}>
        <img
          src={require("../../../static/illustrationMobile.png")}
          alt="Ilustration"
          className=" w-100"
        />
      </Col>
      <Col className="imageTablet">
        <img
          src={require("../../../static/illustrationTablet.png")}
          alt="Ilustration"
          className="w-100  ml-auto"
        />
      </Col>
      <Col xl={8} className="imageDesktop">
        <img
          src={require("../../../static/illustrationDesktop.png")}
          alt="Ilustration"
          className=" w-100"
        />
      </Col>
    </>
  );
};

export default ContentLeft;
