import React from "react";
import { Col, Row } from "react-bootstrap";
const Content = () => {
  return (
    <div style={{ height: "100%", paddingTop: "64px", paddingBottom: "64px" }}>
      <p className="QuoteCaption">We’re Hiring!</p>
      <h1 className="Title">Work with us!</h1>
      <ul>
        <li className="listItem">Work from anywhere</li>
        <li className="listItem">Unique benefits</li>
        <li className="listItem">Competetive salary</li>
        <li className="listItem">$1000 annual tech bonus</li>
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
    </div>
  );
};

export default Content;
