import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Process.css";

const Step1 = ({ title, p1, subtitle, p2 }) => {
  return (
    <>
      <Container className="step1Desktop">
        <Row>
          <Col className="imgStyle">
            <img
              src={require("../../../static/01Desktop.png")}
              alt="imgDesktop"
            />
          </Col>
          <Col>
            <div>
              <h1 className="title"> {title} </h1>
              <p className="paragraph"> {p1} </p>
            </div>
            <div className="infoContainer">
              <h6 className="subtitle"> {subtitle} </h6>
              <p className="paragraph"> {p2} </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="step1Tablet">
        <Row>
          <Col className="imgStyle" md="3">
            <img
              src={require("../../../static/01MobileTablet.png")}
              alt="imgTablet"
            />
          </Col>
          <Col md="9">
            <h1 className="titleTabletMobile"> {title} </h1>
            <p className="paragraph"> {p1} </p>
            <div className="infoContainer">
              <h6 className="subtitle"> {subtitle} </h6>
              <p className="paragraph"> {p2} </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="step1Mobile" style={{ marginBottom: "60px" }}>
        <Row>
          <Col
            className="imgStyleMobile"
            sm="12"
            style={{ position: "relative" }}
          >
            <img
              src={require("../../../static/01MobileTablet.png")}
              alt="imgMobile"
            />
          </Col>
          <Col sm="12" style={{ marginTop: "10px" }}>
            <h1 className="titleTabletMobile"> {title} </h1>
            <p className="paragraph"> {p1} </p>
            <div className="infoContainer">
              <h6 className="subtitle"> {subtitle} </h6>
              <p className="paragraph"> {p2} </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Step1;
