import React from "react";
import { Col, Row } from "react-bootstrap";

const Partners = ({ imgs }) => {
  return (
    <Row>
      {imgs.map((img, index) => (
        <Col
          style={{ marginBottom: "10%" }}
          key={index}
          xs="6"
          sm="4"
          md="4"
          lg="4"
        >
          <img className="d-flex w-100" src={img} alt={index} key={index} />
        </Col>
      ))}
    </Row>
  );
};

export default Partners;
