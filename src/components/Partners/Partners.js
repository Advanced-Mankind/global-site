import React from "react";
import { Col, Row } from "react-bootstrap";

const Partners = ({ imgs }) => {
  return (
    <Row noGutters>
      {imgs.map((img, index) => {
        console.log(index % 3);
        let currentStyle;
        if (index % 3 === 0) {
          currentStyle = {
            marginRight: "-30px",
            marginLeft: "30px",
          };
        } else if (index % 3 === 1) {
        } else if (index % 3 === 2) {
          currentStyle = {
            marginRight: "30px",
            marginLeft: "-30px",
          };
        }
        return (
          <>
            <Col
              key={index}
              xs="6"
              sm="4"
              md="4"
              lg="4 "
              className="d-md-block d-none"
              style={currentStyle}
            >
              <img
                className="d-flex w-100 "
                src={img}
                alt={index}
                key={index}
              />
            </Col>
            <Col
              key={index}
              xs="6"
              sm="4"
              md="4"
              lg="4 "
              className="d-md-none d-sm-block"
            >
              <img
                className="d-flex w-100 "
                src={img}
                alt={index}
                key={index}
              />
            </Col>
          </>
        );
      })}
    </Row>
  );
};

export default Partners;
