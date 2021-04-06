import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LogoFooter from "../../static/AM_Logo_fullcolor.svg";
import styles from "../theme/index.module.css";
import TermAndConditions from "./TermAndConditions";
const Footer = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <footer className={`${styles.footer} mt-5`}>
      <Container fluid className="bg-white py-5 px-5">
        <Row>
          <Col className="mb-4 mb-sm-0">
            <img src={LogoFooter} />
          </Col>
          <Col xs={12} sm={5} lg={4}>
            <Row>
              <Col xs={6} sm={4} className="mt-3 mt-sm-0">
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
                  <Col
                    onClick={() => setModalShow(true)}
                    className={`${styles.footersectiontext} mb-1 ${styles.cursorPointer} `}
                  >
                    Terms And Conditions
                  </Col>
                </Row>
              </Col>

              <Col xs={6} sm={4} className="mt-3 mt-sm-0">
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

              <Col xs={6} sm={4} className="mt-3 mt-sm-0">
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
          <hr className={`${styles.separator} col mx-3 `}></hr>
        </div>
        <div className="row ">
          <div className="col col-lg-6 ml-auto mr-3 pr-0  footer-Text">
            <p className={` mb-0  ${styles.footerText}`}>
              2021 © Advanced Mankind. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
      <TermAndConditions
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></TermAndConditions>
    </footer>
  );
};

export default Footer;
