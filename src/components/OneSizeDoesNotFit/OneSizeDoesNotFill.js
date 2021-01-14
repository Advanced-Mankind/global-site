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
      <Container className="stylesMobile">
        <Row>
          <Col>
            <img
              src={require("../../../static/homeHouseMobile.png")}
              alt="homeMobile"
              className="mx-auto d-flex"
            />
            <h1 className="title">{firstTitle}</h1>
            <p className="paragraph"> {firstParagraph} </p>
            <img
              src={require("../../../static/reviewGraphMobile.png")}
              alt="reviewMobile"
              style={{ paddingTop: "3%" }}
              className="mx-auto d-flex"
            />
            <h1 className="title"> {secondTitle} </h1>
            <p className="paragraph"> {secondParagraph} </p>
          </Col>
        </Row>
      </Container>

      <Container className="stylesTablet">
        <Row>
          <Col md="6">
            <div>
              <h1 className="title"> {firstTitle} </h1>
              <p className="paragraph"> {firstParagraph} </p>
            </div>
          </Col>
          <Col md="6">
            <img
              src={require("../../../static/homeHouseTablet.png")}
              alt="homeMobile"
            />
          </Col>
          <Col md="4" style={{ paddingTop: "3%" }}>
            <img
              src={require("../../../static/reviewGraphTablet.png")}
              alt="homeMobile"
            />
          </Col>
          <Col md="8">
            <h1 className="title"> {secondTitle} </h1>
            <p className="paragraph"> {secondParagraph} </p>
          </Col>
        </Row>
      </Container>

      <Container className="stylesDesktop">
        <Row className="col Container">
          <Col md="6" lg="6">
            <div>
              <h1 className="title"> {firstTitle} </h1>
              <p className="paragraph"> {firstParagraph} </p>
            </div>
          </Col>
          <Col md="6" lg="6">
            <img
              src={require("../../../static/homeHouseDesktop.png")}
              alt="homeMobile"
            />
          </Col>
          <Col md="6" lg="6" style={{ paddingTop: "3%" }}>
            <img
              src={require("../../../static/reviewGraphDesktop.png")}
              alt="homeMobile"
            />
          </Col>
          <Col md="6" lg="6">
            <div>
              <h1 className="title"> {secondTitle} </h1>
              <p className="paragraph"> {secondParagraph} </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default OneSizeDoesNotFill;
