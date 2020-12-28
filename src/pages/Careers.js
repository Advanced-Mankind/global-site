// import { Link } from "gatsby";
import { Link } from "gatsby";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CareersHero from "../components/CareersHero/CareersHero";
import GetStarted from "../components/GetStarted/GetStarted";
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
              <Col sm="8" md="8" lg="8">
                <h1 className={styles.title}>Raw Talent, Apply Within.</h1>
                <p className={styles.paragraph}>
                  We trust our team. We value commitment, family, and a working
                  environment to thrive. Our application process is thorough. We
                  work hard to find colleagues with the skills and independence
                  that align with the high standards of Advanced Mankind. It’s
                  worth it.
                </p>
              </Col>
              <Col sm="4" md="3" lg="2">
                <Link to="/Positions">
                  <Button style={{ borderRadius: "34px", fontSize: "18px" }}>
                    See Position
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
          <CareersHero />
        </div>
        <div>
          <OurPerks />
        </div>
        <div style={{ marginTop: "5%" }}>
          <GetStarted />
        </div>
      </div>
    </Layout>
  );
}
