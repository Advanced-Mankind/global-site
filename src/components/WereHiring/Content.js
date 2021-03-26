import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles.css";
const Content = () => {
  return (
    <div style={{ height: "100%", paddingTop: "64px", paddingBottom: "64px" }}>
      <Row className="ml-0">
        <div className="pulsatingDot mr-3" />
        <p className="HiringCaption mb-0">We’re Hiring!</p>
      </Row>
      <p style={{ marginBottom: "28px" }} className="Title">
        Work with us!
      </p>
      <ul className="ulIconWork">
        <li>Work from anywhere</li>
        <li>Unique benefits</li>
        <li>Competetive salary</li>
        <li>$1000 annual tech bonus</li>
      </ul>
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
          <Col xs={2} md={2} xl={1}>
            <img
              className="avatar"
              src={require("../../../static/Scott_profile.png")}
              alt="Ilustration"
            />
          </Col>
          <Col xs={10} md={10} xl={9}>
            <Row>
              <Col xs={12} xl={7}>
                <p className="QuoteCaption">
                  “Working at Advanced Mankind starts with good people. The
                  knowledge and skill they have represent the fuel that drives
                  the heart of this company.”
                </p>
              </Col>
              <div className="w-100 d-flex">
                <h4 className="QuoteCaptionBold">Scott Prather</h4>
                <h4 className="caption">, Creative Director</h4>
              </div>
            </Row>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default Content;
