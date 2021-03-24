import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";

const OneSizeDoesNotFill = ({
  firstTitle,
  secondTitle,
  firstParagraph,
  secondParagraph,
}) => {
  return (
    <Container fluid className="backgroundContainer">
      <div className="stylesMobile">
        <Row>
          <Col className="my-4">
            <img
              src={require("../../../static/homeHouseMobile.png")}
              alt="homeMobile"
              className="m-0 d-flex"
            />
            <h1 className="titleMobile">{firstTitle}</h1>
            <p className="paragraph"> {firstParagraph} </p>
            <img
              src={require("../../../static/reviewGraphMobile.png")}
              alt="reviewMobile"
              style={{ paddingTop: "3%" }}
              className="m-0 d-flex"
            />
            <h1 className="titleMobile"> {secondTitle} </h1>
            <p className="paragraph"> {secondParagraph} </p>
          </Col>
        </Row>
      </div>

      <Container className="stylesTablet">
        <Row>
          <Col md="6">
            <img
              src={require("../../../static/homeHouseTablet.png")}
              alt="homeMobile"
            />
            <div>
              <h1 className="titleContainer"> {firstTitle} </h1>
              <p className="paragraph"> {firstParagraph} </p>
            </div>
          </Col>
          <Col md="6">
            <img
              src={require("../../../static/reviewGraphTablet.png")}
              alt="homeMobile"
            />
            <h1 className="titleContainer"> {secondTitle} </h1>
            <p className="paragraph"> {secondParagraph} </p>
          </Col>
        </Row>
      </Container>

      <Container className="stylesDesktop">
        <Row>
        <Col lg="6">
            <img
              src={require("../../../static/homeHouseDesktop.png")}
              alt="homeMobile"
            />
            <div>
              <h1 className="titleContainer"> {firstTitle} </h1>
              <p className="paragraph"> {firstParagraph} </p>
            </div>
          </Col>
         
          <Col lg="6">
            <img
              src={require("../../../static/reviewGraphDesktop.png")}
              alt="homeMobile"
            />
            
            <div>
              <h1 className="titleContainer"> {secondTitle} </h1>
              <p className="paragraph"> {secondParagraph} </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default OneSizeDoesNotFill;
