import { Link } from "gatsby";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./StartsWithWhy.css";

const ContentRight = () => {
  return (
    <Row>
      <Col xs={12} md={12} xl={8}>
        <h2 className="Title">We believe. We dream. We build.</h2>
      </Col>
      <Col xs={12} md={12} xl={8}>
        <p className="Paragraph">
          Why do we approach our work with gut feelings, efficient methods, and
          creative problem solving? We do it because we aim to harness
          tomorrow’s technology our business partners need and their users want.
        </p>
      </Col>
      <Col xs={12}>
        <Link to="/Our-Approach/">
          <button className="Button">LEARN MORE</button>
        </Link>
      </Col>
      <Col xs={12}>
        <Row>
          <i className="divider-line"></i>
        </Row>
      </Col>
      <Col xs={12}>
        <Row>
          <Col xs={2} md={2} xl={1}>
            <img
              className="avatar"
              src={require("../../../static/profile3.png")}
              alt="Ilustration"
            />
          </Col>
          <Col xs={9} md={10} xl={9}>
            <Row>
              <Col xs={12}>
                <p className="QuoteCaption">
                  “We value our partnership with Advncd Manknd. Their team is
                  always responsive to our needs and provide extraordinary
                  service on every engagement.”
                </p>
              </Col>
              <div className="w-100 d-flex">
                <h4 className="QuoteCaptionBoldKelly">Kelly Rader</h4>
                <h4 className="caption">, Object Edge</h4>
              </div>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ContentRight;
