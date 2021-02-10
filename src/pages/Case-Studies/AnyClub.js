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
        }}
      >
        <h1 className="title">AnyClub</h1>
        <Row className="mt-5">
          <Col xs={12} md={4}>
            <h2 className={styles.subtitle22px}>The Challenge</h2>
          </Col>
          <Col xs={12} md={8}>
            <p className="paragraph mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              ante ante, blandit ut euismod sagittis, facilisis ac ante.
              Phasellus semper leo eget urna gravida, nec tempor dui consequat.
              Mauris consectetur ligula id justo pellentesque, et maximus ligula
              aliquet. Nam at elit elit. Fusce sollicitudin sollicitudin felis,
              semper tincidunt massa vehicula ut. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col sm="12" md="12" lg="12" className="">
            <img
              className="img-fluid"
              src={require("../../../static/anyclub1.png")}
              alt={require("../../../static/anyclub1.png")}
              key={require("../../../static/anyclub1.png")}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={4}>
            <h2 className={styles.subtitle22px}>UX/UI Design</h2>
          </Col>
          <Col xs={12} md={8}>
            <p className="paragraph mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              ante ante, blandit ut euismod sagittis, facilisis ac ante.
              Phasellus semper leo eget urna gravida, nec tempor dui consequat.
              Mauris consectetur ligula id justo pellentesque, et maximus ligula
              aliquet. Nam at elit elit. Fusce sollicitudin sollicitudin felis,
              semper tincidunt massa vehicula ut. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              <br></br>
              <br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              ante ante, blandit ut euismod sagittis, facilisis ac ante.
              Phasellus semper leo eget urna gravida, nec tempor dui consequat.
              Mauris consectetur ligula id justo pellentesque, et maximus ligula
              aliquet. Nam at elit elit. Fusce sollicitudin sollicitudin felis,
              semper tincidunt massa vehicula ut. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              <br></br>
              <br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              ante ante, blandit ut euismod sagittis, facilisis ac ante.
              Phasellus semper leo eget urna gravida, nec tempor dui consequat.
              Mauris consectetur ligula id justo pellentesque, et maximus ligula
              aliquet. Nam at elit elit. Fusce sollicitudin sollicitudin felis,
              semper tincidunt massa vehicula ut. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
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
            <h2 className={styles.subtitle22px}>The Result</h2>
          </Col>
          <Col xs={12} md={8}>
            <p className="paragraph mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              ante ante, blandit ut euismod sagittis, facilisis ac ante.
              Phasellus semper leo eget urna gravida, nec tempor dui consequat.
              Mauris consectetur ligula id justo pellentesque, et maximus ligula
              aliquet. Nam at elit elit. Fusce sollicitudin sollicitudin felis,
              semper tincidunt massa vehicula ut. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col sm="12" md="12" lg="12" className="">
            <img
              className="img-fluid"
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
      <Container style={{ marginTop: "5%" }}>
        <GetStarted />
      </Container>
    </Layout>
  );
}
