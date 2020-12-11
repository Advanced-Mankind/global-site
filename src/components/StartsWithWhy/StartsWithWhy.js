import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
import "./StartsWithWhy.css";

const StartsWithWhy = () => {
  return (
    <Container fluid>
      <Row className="StartsWithWhyContainer">
        <ContentLeft />
        <Col
          sm="12"
          md="5"
          lg="4"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ContentRight />
        </Col>
      </Row>
    </Container>
  );
};

export default StartsWithWhy;
