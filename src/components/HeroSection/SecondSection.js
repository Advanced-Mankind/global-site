import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Card from "./Card";
import "./styles.css";

const SecondSection = () => {
  return (
    <>
      <Carousel
        className="mobile"
        style={{ marginTop: "2%", marginBottom: "4%" }}
      >
        <Carousel.Item className="mb-5">
          <Col sm="12">
            <Card
              icon={require("../../../static/compass.svg")}
              headline={"Innovation"}
              paragraph={
                "Always be one step ahead. We imagine like crazy, promote freedom of expression, and inspire each other."
              }
            />
          </Col>
        </Carousel.Item>
        <Carousel.Item className="mb-5">
          <Col sm="12">
            <Card
              icon={require("../../../static/compass.svg")}
              headline={"Innovation"}
              paragraph={
                "Always be one step ahead. We imagine like crazy, promote freedom of expression, and inspire each other."
              }
            />
          </Col>
        </Carousel.Item>
        <Carousel.Item className="mb-5">
          <Col sm="12">
            <Card
              icon={require("../../../static/compass.svg")}
              headline={"Innovation"}
              paragraph={
                "Always be one step ahead. We imagine like crazy, promote freedom of expression, and inspire each other."
              }
            />
          </Col>
        </Carousel.Item>
        <Carousel.Item className="mb-5">
          <Col sm="12">
            <Card
              icon={require("../../../static/heartDesktop.png")}
              headline={"Joy"}
              paragraph={
                "You only live once so enjoy the moment to the fullest. We are spontaneous, friendly, and positive."
              }
            />
          </Col>
        </Carousel.Item>
      </Carousel>

      <Container
        style={{ marginTop: "2%", marginBottom: "2%" }}
        className="desktopAndTablet"
      >
        <Row className="justify-content-between">
          <Col md="3" lg="3">
            <Card
              icon={require("../../../static/compass.svg")}
              headline={"Innovation"}
              paragraph={
                "Always be one step ahead. We imagine like crazy, promote freedom of expression, and inspire each other."
              }
            />
          </Col>
          <Col md="3" lg="3">
            <Card
              icon={require("../../../static/flash.svg")}
              headline={"Power"}
              paragraph={
                "Be confident and have what you want. Our goal is to develop a vision, live by it, and transform reality."
              }
            />
          </Col>
          <Col md="3" lg="3">
            <Card
              icon={require("../../../static/bulbDesktop.png")}
              headline={"Understanding"}
              paragraph={
                "The world is understood through the analysis of information and intelligent research. Our focus is sharing that knowledge."
              }
            />
          </Col>
          <Col md="3" lg="3">
            <Card
              icon={require("../../../static/heartDesktop.png")}
              headline={"Joy"}
              paragraph={
                "You only live once so enjoy the moment to the fullest. We are spontaneous, friendly, and positive."
              }
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SecondSection;
