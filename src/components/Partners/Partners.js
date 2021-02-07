import React from "react";
import { Col, Row } from "react-bootstrap";

const Partners = ({ imgs }) => {
  return (
    <Row>
      {imgs.map((img, index) => (
        <Col key={index} md={3} xs={6} xl={3}>
          <img className="d-flex w-100" src={img} alt={index} key={index} />
        </Col>
      ))}
    </Row>
  );
};

export default Partners;
