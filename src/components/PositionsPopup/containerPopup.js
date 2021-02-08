import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PositionsPopup from "./PositionsPopup";

const ContainerPopup = () => {
  return (
    <Container
      fluid
      className="popContainer"
      style={{ marginLeft: "10px", marginRight:"10px"}}
    >
      <Container>
      <Row>
        <Col sm="12" md="12" lg="12">
        </Col>
        <Col
          sm="12"
          md="12"
          lg="12"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PositionsPopup />
        </Col>
      </Row>
      </Container>
    </Container>
  );
};

export default ContainerPopup;
