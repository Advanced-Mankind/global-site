import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GetStarted from "../../components/GetStarted/GetStarted";
import Layout from "../../components/layout";
import styles from "../../theme/index.module.css";

export default function Chedraui() {
  return (
    <Layout>
      <Container
        style={{
          paddingTop: "90px",
          marginBottom: "5%",
        }}
      >
        <h1 className="title">Chedraui</h1>
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
              src={require("../../../static/chedraui1.png")}
              alt={require("../../../static/chedraui1.png")}
              key={require("../../../static/chedraui1.png")}
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
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col sm="12" md="12" lg="12" className="">
            <img
              className="img-fluid"
              src={require("../../../static/chedraui2.png")}
              alt={require("../../../static/chedraui2.png")}
              key={require("../../../static/chedraui2.png")}
            />
          </Col>
        </Row>
        <Row className="">
          <Col sm="12" md="12" lg="12" className="">
            <img
              className="img-fluid"
              src={require("../../../static/chedraui3.png")}
              alt={require("../../../static/chedraui3.png")}
              key={require("../../../static/chedraui3.png")}
            />
          </Col>
        </Row>
        <Row className="">
          <Col xs="6" sm="6" md="6" lg="6" className="pr-0">
            <img
              className="img-fluid"
              src={require("../../../static/chedraui4.png")}
              alt={require("../../../static/chedraui4.png")}
              key={require("../../../static/chedraui4.png")}
            />
          </Col>
          <Col xs="6" sm="6" md="6" lg="6" className="pl-0">
            <img
              className="img-fluid"
              src={require("../../../static/chedraui5.png")}
              alt={require("../../../static/chedraui5.png")}
              key={require("../../../static/chedraui5.png")}
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
              style={{
                borderRadius: "2%",
              }}
              className="img-fluid"
              src={require("../../../static/chedraui6.png")}
              alt={require("../../../static/chedraui6.png")}
              key={require("../../../static/chedraui6.png")}
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
