import React from "react";
import { Col, Row } from "react-bootstrap";
import "./StartsWithWhy.css";

const ContentRight = () => {
  return (
    <Row>
      <Col xs={12}>
        <h2 className="Title">We believe. We dream. We build.</h2>
      </Col>
      <Col xs={12}>
        <p className="Paragraph">
          Why do we approach our work with gut feelings, efficient methods, and
          creative problem solving? We do it because we aim to harness
          tomorrow’s technology our business partners need and their users want.
        </p>
      </Col>
      <Col xs={12}>
        <button className="Button">LEARN MORE</button>
      </Col>
      <Col xs={12}>
        <Row>
          <i className="divider-line"></i>
        </Row>
      </Col>
      <Col xs={12}>
        <Row>
          <Col xs={3}>
            <img
              className="avatar"
              src={require("../../../static/people.png")}
              alt="Ilustration"
            />
          </Col>
          <Col xs={9}>
            <Row>
              <Col xs={12}>
                <p className="QuoteCaption">
                  “Would love to have a quote here from a client for happy
                  customer talking about how great it was to work with us. Lorem
                  upsum dolor un met lorem ipsum dolor un met.”
                </p>
              </Col>
              <Col xs={12}>
                <p className="QuoteCaption">Paul Demark, VP of Company Name</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ContentRight;
