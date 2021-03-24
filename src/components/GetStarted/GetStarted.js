import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContentLeft from "./ContentLeft";
import FormGetStarted from "./Form";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div className="GetStarterContainer">
      <Container>
        <Row className="">
          <Col sm="12" md="12" lg="6">
            <ContentLeft />
          </Col>
          <Col
            sm="12"
            md="12"
            lg="6"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding:"0px"
            }}
          >
          <FormGetStarted/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GetStarted;
