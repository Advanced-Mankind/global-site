import { Link } from "gatsby";
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../theme/index.module.css";
export default class Footer extends Component {
  render() {
    return (
      <footer className={`${styles.footer} mt-5`}>
        <Row>
          <Col xs={12} sm={6}>
            <Row>
              <Col xs={6} sm={4} className="mt-3">
                <Row>
                  <Col className={`${styles.footersectiontextbold} mb-1`}>
                    Company
                  </Col>
                  <div className="w-100"></div>
                  <Col className={`${styles.footersectiontext} mb-1`}>
                    <Link className={`${styles.footersectiontext}`} to="/">
                      Contact
                    </Link>
                  </Col>
                  <div className="w-100"></div>
                  <Col className={`${styles.footersectiontext} mb-1`}>
                    <Link className={`${styles.footersectiontext}`} to="/">
                      Get Started
                    </Link>
                  </Col>
                  <div className="w-100"></div>
                </Row>
              </Col>

              <Col xs={6} sm={4} className="mt-3">
                <Row>
                  <Col className={`${styles.footersectiontextbold} mb-1`}>
                    People
                  </Col>
                  <div className="w-100"></div>
                  <Col className={`${styles.footersectiontext} mb-1`}>
                    <Link
                      className={`${styles.footersectiontext}`}
                      to="/Positions/"
                    >
                      Team
                    </Link>
                  </Col>
                  <div className="w-100"></div>
                  <Col className={`${styles.footersectiontext} mb-1`}>
                    <Link
                      className={`${styles.footersectiontext}`}
                      to="/Careers/"
                    >
                      Careers
                    </Link>
                  </Col>
                  <div className="w-100"></div>
                </Row>
              </Col>

              <Col xs={6} sm={4} className="mt-3">
                <Row>
                  <Col className={`${styles.footersectiontextbold} mb-1`}>
                    Work
                  </Col>
                  <div className="w-100"></div>
                  <Col className={`${styles.footersectiontext} mb-1`}>
                    <Link
                      className={`${styles.footersectiontext}`}
                      to="/Our-Approach/"
                    >
                      Approach
                    </Link>
                  </Col>
                  <div className="w-100"></div>
                  <Col className={`${styles.footersectiontext} mb-1 `}>
                    <Link
                      className={`${styles.footersectiontext}`}
                      to="/Case-Studies/"
                    >
                      Case Studies
                    </Link>
                  </Col>
                  <div className="w-100"></div>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="row">
          <hr className={`${styles.separator} col mx-4`}></hr>
        </div>
        <div className="row">
          <div className="col col-lg-6 ml-auto px-4 footer-Text">
            <p className={styles.footerText}>
              2021 © Advanced Mankind North America, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
