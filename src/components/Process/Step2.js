import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Process.css";

const Step2 = ({ title, paragraph }) => {
  return (
    <>
      <Container style={{ marginTop: "5%" }} className="step2Desktop">
        <Row>
          <Col lg="6">
            <h1 className="title"> {title} </h1>
            <p className="paragraph"> {paragraph} </p>
            <img
              src={require("../../../static/curveChartDesktop.png")}
              alt="chartDesktop"
            />
          </Col>
          <Col className="imgStyle" lg="6">
            <img
              src={require("../../../static/02Desktop.png")}
              alt="imgDesktop"
            />
          </Col>
        </Row>
      </Container>
      <Container className="step2Tablet" style={{ marginTop: "8%" }}>
        <Row>
          <Col md="9">
            <h1 className="titleTabletMobile"> {title} </h1>
            <p className="paragraph"> {paragraph} </p>
            <img
              src={require("../../../static/curveChartTablet.png")}
              alt="chartTablet"
            />
          </Col>
          <Col className="imgStyle" md="3">
            <img
              src={require("../../../static/02MobileTablet.png")}
              alt="imgDesktop"
            />
          </Col>
        </Row>
      </Container>
      <Container className="step2Mobile" style={{ marginBottom: "60px" }}>
        <Row>
          <Col sm="12">
            <img
              src={require("../../../static/02MobileTablet.png")}
              alt="imgDesktop"
            />
          </Col>
          <Col
            sm="12"
            style={{
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1 className="titleTabletMobile"> {title} </h1>
            <p className="paragraph"> {paragraph} </p>
            <img style={{width:"100%"}}
              src={require("../../../static/curveChartMobile.svg")}
              alt="chartMobile"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Step2;
