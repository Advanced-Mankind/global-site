import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Content from "./Content";
import "./styles.css";

const WereHiring = () => {
  return (
    <>
      <div className="p-0 m-0 wereHiringMobile">
        <Container>
          <Row className="mx-0 ">
            <Col sm={4}></Col>
            <Col sm={8}>
              <Content />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="wereHiringTablet">
        <Container>
          <Row className="w-100 mx-0 ">
            <Col md={6}></Col>
            <Col md={6}>
              <Content />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="wereHiringDesktop">
        <Container>
          <Row className="w-100 mx-0 ">
            <Col md={6}></Col>
            <Col md={6}>
              <Content />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WereHiring;
