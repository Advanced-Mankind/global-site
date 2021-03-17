import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/layout";
import styles from "../../theme/index.module.css";
import GetStarted from "../../components/GetStarted/GetStarted";
export default function Logicalis() {
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
          Facilitating business and user goals with an innovative portal
        </h1>
        <Row className="mt-5">
          <Col xs={12} md={4}>
            <h2 className={styles.subtitle22px}>The Challenge</h2>
          </Col>
          <Col xs={12} md={8}>
            <p className="paragraph mb-5">
              Logicalis is a professional managed IT Services with one of the
              largest network of technology partners and client base globally.
              Their business model includes many faceted solutions but for our
              engagement, we concentrated on a Configure Price and Quote (CPQ)
              solution based on Oracle Cloud Commerce. Our goal was to guide the
              business team in a fast and seamless deployment process for a
              custom eBusiness portal to automate the CPQ procedure that up to
              that day occurred manually over the phone.
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col sm="12" md="12" lg="12" className="">
            <img
              className="img-fluid"
              src={require("../../../static/logicalis1.png")}
              alt={require("../../../static/logicalis1.png")}
              key={require("../../../static/logicalis1.png")}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={4}>
            <h2 className={styles.subtitle22px}>UX/UI Design</h2>
          </Col>
          <Col xs={12} md={8}>
            <p className="paragraph mb-5">
              Our product design team started designing the experience of the
              CPQ portal for the target users and with the main activities they
              will perform in it. The main goal of the team was to reduce
              transactional friction and create an environment conducive to
              their procurement activities in order to reduce time in the
              application.
              <br></br>
              <br></br>
              With patterns and behaviors identified in the user flows, the team
              focused on creating a design system that would convey the brand
              messaging but at the same time create an interface that is
              intuitive, heuristically sounding, and aesthetically pleasing to
              keep the product relevant for the next five years in the market.
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col sm="12" md="12" lg="12" className="">
            <img
              className="img-fluid"
              src={require("../../../static/logicalis2.png")}
              alt={require("../../../static/logicalis2.png")}
              key={require("../../../static/logicalis2.png")}
            />
          </Col>
        </Row>

        <Row className="">
          <Col xs="6" sm="6" md="6" lg="6" className="pr-0">
            <img
              className="img-fluid"
              src={require("../../../static/logicalis3.png")}
              alt={require("../../../static/logicalis3.png")}
              key={require("../../../static/logicalis3.png")}
            />
          </Col>
          <Col xs="6" sm="6" md="6" lg="6" className="pl-0">
            <img
              className="img-fluid"
              src={require("../../../static/logicalis4.png")}
              alt={require("../../../static/logicalis4.png")}
              key={require("../../../static/logicalis4.png")}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={4}>
            <h2 className={styles.subtitle22px}>The Result</h2>
          </Col>
          <Col xs={12} md={8}>
            <p className="paragraph mb-5">
              The work on Logicalis was a combination of efforts with our Oracle
              implementation Partner and quite the challenge, specifically when
              we helped a business team shape a product from the ground up to
              automate a process that to the beginning of the project was
              completely manual.
              <br></br>
              <br></br>
              Not only the design of the product itself added value to the end
              user but the integration of third party services to enrich product
              information, as well as CPQ process automation, payment
              processing, and fulfillment made this product a tool that is
              shaping the way Logicalis conducts business today, in an economy
              that is moving towards a 100% automated solution between buyer and
              seller, no matter the complexity of the selling agreements.
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col sm="12" md="12" lg="12" className="">
            <img
              className="img-fluid"
              src={require("../../../static/logicalis5.png")}
              alt={require("../../../static/logicalis5.png")}
              key={require("../../../static/logicalis5.png")}
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
