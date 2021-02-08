// import { Link } from "gatsby";
import { Link } from "gatsby";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import OurPerks from "../components/OurPerks/OurPerks";
import styles from "../theme/index.module.css";

export default function Careers() {
  // <Link to="/Careers/">Careers</Link>
  return (
    <Layout>
      <div className={`${styles.body} "container-fluid p-0"`}>
        <div style={{ marginTop: "5%" }}>
          <Container style={{ marginBottom: "2%" }}>
            <Row
              className="justify-content-between"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Col sm="8" md="6" lg="6">
                <h1 className={styles.title}>Raw Talent, Apply Within.</h1>
                <p className={styles.paragraph}>
                  We trust our team. We value commitment, family, and a working
                  environment to thrive. Our application process is thorough. We
                  work hard to find colleagues with the skills and independence
                  that align with the high standards of Advanced Mankind. It’s
                  worth it.
                </p>
                <h1 style={{ fontSize: "26px", fontWeight: "bold" }}>
                  Get to know us.
                </h1>
                <p className={styles.paragraph}>
                  Advanced Mankind is lit. And, we think you’ll think so, too.
                  We’ve built a team of friendly people who do great work. We’re
                  versatile and evolved, with the right mix of kick ass tools,
                  smarts, and likability. Our team has creators, magicians,
                  sages, and jesters wrapped together to expand the
                  possibilities, set benchmarks, and transmit optimism while
                  working hard for our partners.
                </p>
                <Col sm="8" md="8" lg="5">
                  <Link to="/Positions">
                    <Button
                      style={{
                        borderRadius: "34px",
                        backgroundColor: "#3333FF",
                        marginTop: "20px",
                        width: "100%",
                        padding: "16px",
                        alignItems: "center",
                        fontFamily: "Open Sans",
                        fontSize: "18px",
                        fontWeight: "bold",
                        lineHeight: "24px",
                      }}
                    >
                      SEE POSITION
                    </Button>
                  </Link>
                </Col>
              </Col>
              <Col className={""} sm="8" md="6" lg="2">
                <Row className="img-Container .d-sm-none .d-md-block mx-auto">
                  <img
                    className="img-1"
                    src={require("../../static/Image right.png")}
                    alt="Ilustrations1"
                  />
                  <img
                    className="img-2"
                    src={require("../../static/Image right-1.png")}
                    alt="Ilustrations2"
                  />
                  <img
                    className="img-3"
                    src={require("../../static/Image right-2.png")}
                    alt="Ilustrations3"
                  />
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <Col className={"mt-5"} sm="8" md="12" lg="12">
          <p className={styles.title} style={{ textAlign: "center" }}>
            Our Benefits
          </p>
        </Col>
        <div>
          <OurPerks />
        </div>
        <div style={{ marginTop: "5%", marginLeft: "5%", marginRight: "5%" }}>
          <div className={styles.getContainer}>
            <Container>
              <Row
                className="justify-content-between"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Col sm="8" md="8" lg="8">
                  <h1 className={styles.getTitle}>Get to Work</h1>
                  <p className={styles.getParagraph}>
                    Our culture is relentlessly positive, with autonomy. It’s
                    uncomplicated, with passion for building the future of
                    digital products. Get started with the application process
                    today if you are a fit for Advanced Mankind.
                  </p>
                </Col>
                <Col sm="12" md="4" lg="3">
                  <Button
                    style={{
                      borderRadius: "34px",
                      backgroundColor: "#DEE2E8",
                      color: "#222B45",
                      marginTop: "28px",
                      marginBottom: "30px",
                      width: "100%",
                      padding: "16px",
                      alignItems: "center",
                      fontFamily: "Open Sans",
                      fontSize: "18px",
                      fontWeight: "bold",
                      lineHeight: "24px",
                    }}
                  >
                    SEE POSITIONS
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </Layout>
  );
}
