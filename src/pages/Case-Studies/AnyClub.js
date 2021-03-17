import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/layout";
import GetStarted from "../../components/GetStarted/GetStarted";
import styles from "../../theme/index.module.css";

export default function AnyClub() {
  return (
    <Layout>
      <Container
        style={{
          paddingTop: "90px",
          marginBottom: "5%",
          marginTop: "80px",
        }}
      >
        <h1 className={styles.title}>
          Connecting team managers to players with AnyClub
        </h1>
        <Row className="mt-5">
          <Col xs={12} md={4}>
            <h2 className={styles.subtitle22px}>The Challenge</h2>
          </Col>
          <Col xs={12} md={8}>
            <p className="paragraph mb-5">
              AnyClub is a digital platform for junior sport leagues to have an
              overview of their payments and manage their teams. They had an
              existing app and accompanying CMS system for the management and
              interaction between junior sport leagues however it was outdated
              and had many critical reviews in the app store thus making it
              difficult to compete against other relevant competitors.
            </p>
            <Row>
              <Col xs="12" sm="6" md="6" lg="6">
                <h2 className={styles.subtitle15}>Business Needs</h2>
                <p>
                  AnyClub needs a whole revamp of their interface so it may
                  appeal to new users, improved user experience ensuring a
                  delightful experience that will boost sales and user
                  retention.
                </p>
              </Col>
              <Col xs="12" sm="6" md="6" lg="6">
                <h2 className={styles.subtitle15}>User Needs</h2>
                <p>
                  Sport players need a new and effective way to set up payments
                  and invoices for their junior sport league team.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="">
          <Col sm="12" md="12" lg="12" className="">
            <img
              className="d-none d-sm-block img-fluid w-100"
              src={require("../../../static/anyclub1.png")}
              alt={require("../../../static/anyclub1.png")}
              key={require("../../../static/anyclub1.png")}
            />
            <img
              style={{
                borderRadius: "10px",
              }}
              className="d-block d-sm-none img-fluid w-100"
              src={require("../../../static/anyclub1Mobile.png")}
              alt={require("../../../static/anyclub1Mobile.png")}
              key={require("../../../static/anyclub1Mobile.png")}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={4}>
            <h2 className={styles.subtitle22px}>Product Design</h2>
          </Col>
          <Col xs={12} md={8}>
            <p className="paragraph mb-5">
              After understanding both the business and users goals we set off
              to do more user research. This led us to a feature prioritization
              that would elevate the product to being profitable.
              <br></br>
              <br></br>
              Some of these implementations included payment & invoice user
              flows and team member management.
              <br></br>
              <br></br>
              We worked on an agile work flow since it is always important to us
              to continue to iterate and refine the product as we test and
              receive data from usability reports.
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col sm="12" md="12" lg="12" className="">
            <img
              className="img-fluid"
              src={require("../../../static/anyclub2.png")}
              alt={require("../../../static/anyclub2.png")}
              key={require("../../../static/anyclub2.png")}
            />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs={12} md={4}>
            <h2 className={styles.subtitle22px}>Product Development</h2>
          </Col>
          <Col xs={12} md={8}>
            <p className="paragraph mb-5">
              At AnyClub our development team took on the task to move the
              mobile app from a Sencha re-skinning to an overhaul of the
              frontend using React Native as the base for the WPA (Web
              Progressive App).
              <br></br>
              <br></br>
              Additionally, our team worked with the product owners in
              integrating payment capabilities, player performance assessment
              services, and general performance enhancements to the backend
              services as well as a leaner and well structured frontend.
              <br></br>
              <br></br>
              Furthermore, the team took on the refactoring of the existing CMS
              to ensure a better experience not only to end users but
              administrators who use the CMS in different channels by
              introducing the bootstrap responsive framework to the web product.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={4}>
            <h2 className={styles.subtitle22px}>The Result</h2>
          </Col>
          <Col xs={12} md={8}>
            <p className="paragraph mb-5">
              Following multiple rounds of iterations in the user interface,
              task flows as well as polishing up the backend/frontend of their
              system, we are proud and confident to deliver this digital
              solution that will facilitate the experience for many coaches,
              players and managers in the junior soccer league.
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col sm="12" md="12" lg="12">
            <img
              className="img-fluid mt-5"
              src={require("../../../static/anyclub3.png")}
              alt={require("../../../static/anyclub3.png")}
              key={require("../../../static/anyclub3.png")}
            />
          </Col>
        </Row>
        <Row className="">
          <Col xs="6" sm="6" md="6" lg="6" className="pr-0">
            <img
              className="img-fluid"
              src={require("../../../static/anyclub4.png")}
              alt={require("../../../static/anyclub4.png")}
              key={require("../../../static/anyclub4.png")}
            />
          </Col>
          <Col xs="6" sm="6" md="6" lg="6" className="pl-0">
            <img
              className="img-fluid"
              src={require("../../../static/anyclub5.png")}
              alt={require("../../../static/anyclub5.png")}
              key={require("../../../static/anyclub5.png")}
            />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <GetStarted />
      </Container>
    </Layout>
  );
}
