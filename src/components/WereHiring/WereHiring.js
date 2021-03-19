import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Content from "./Content";
import "./styles.css";

const WereHiring = () => {
  return (
    <>
      <Container fluid className="p-0 m-0">
        <Row className="mx-0 wereHiringMobile">
          <Col sm={4}></Col>
          <Col sm={8}>
            <Content />
          </Col>
        </Row>
      </Container>
      <Container fluid className="">
        <Row className="w-100 mx-0 wereHiringTablet">
          <Col md={6}></Col>
          <Col md={6}>
            <Content />
          </Col>
        </Row>
      </Container>
      <Container fluid className="">
        <Row className="w-100 mx-0 wereHiringDesktop">
          <Col md={6}></Col>
          <Col md={6}>
            <Content />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WereHiring;
