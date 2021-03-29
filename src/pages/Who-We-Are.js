import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import TeamCard from "../components/Map/TeamCard";
import OneSizeDoesNotFill from "../components/OneSizeDoesNotFit/OneSizeDoesNotFill";
import WereHirin from "../components/WereHiring/WereHiring";
import "../components/who-whe-are.css";
const team = [
  {
    name: "Emily Allamon",
    title: "Team Manager and Designer",
    imgDesktop: require("../../static/EmilyDesktop.png"),
    imgTablet: require("../../static/EmilyTablet.png"),
    imgMobile:require("../../static/EmilyMobile.png"),
  },
  {
    name: "Fernando Higuera",
    title: "Co-Owner",
    imgDesktop: require("../../static/FernandoDesktop.png"),
    imgTablet: require("../../static/FernandoTablet.png"),
    imgMobile: require("../../static/FernandoMobile.png"),
  },
  {
    name: "Miguel Angel Franco",
    title: "Full stack Developer",
    imgDesktop: require("../../static/MiguelDesktop.png"),
    imgTablet:require("../../static/MiguelTablet.png"),
    imgMobile:require("../../static/MiguelMobile.png"),
  },
  {
    name: "Adrián Gaeta",
    title: "Back End Developer Sr. ",
    imgDesktop: require("../../static/AdrianDesktop.png"),
    imgTablet: require("../../static/AdrianTablet.png"),
    imgMobile:require("../../static/AdrianMobile.png"),
  },
  {
    name: "Yamel Garcia",
    title: "Operations Manager",
    imgDesktop: require("../../static/YamelDesktop.png"),
    imgTablet: require("../../static/YamelTablet.png"),
    imgMobile: require("../../static/YamelMobile.png"),
  },
  {
    name: "Karina Gómez",
    title: "UI/UX Designer",
    imgDesktop: require("../../static/KarinaDesktop.png"),
    imgTablet: require("../../static/KarinaTablet.png"),
    imgMobile:require("../../static/KarinaMobile.png"),
  },
  {
    name: "Armando Nava",
    title: "Back End Developer Sr.",
    imgDesktop:require("../../static/ArmandoDesktop.png"),
    imgTablet: require("../../static/ArmandoTablet.png"),
    imgMobile:require("../../static/ArmandoMobile.png"),
  },
  {
    name: "Scott Prather",
    title: "Creative Director",
    imgDesktop: require("../../static/ScottDesktop.png"),
    imgTablet: require("../../static/ScottTablet.png"),
    imgMobile:require("../../static/ScottMobile.png"),
  },
  {
    name: "Alejandro Rodríguez",
    title: "Lead Front End Developer",
    imgDesktop:require("../../static/AlejandroDesktop.png"),
    imgTablet: require("../../static/AlejandroTablet.png"),
    imgMobile:require("../../static/AlejandroMobile.png"),
  },
  {
    name: "Fabiola Rodríguez",
    title: "Front End Developer",
    imgDesktop:require("../../static/FabiolaDesktop.png"),
    imgTablet: require("../../static/FabiolaTablet.png"),
    imgMobile:require("../../static/FabiolaMobile.png"),
  },
  {
    name: "Rodrigo Sabillon",
    title: "UI/UX Designer",
    imgDesktop: require("../../static/RodrigoDesktop.png"),
    imgTablet: require("../../static/RodrigoTablet.png"),
    imgMobile:require("../../static/RodrigoMobile.png"),
  },
  {
    name: "Daniel Zurita",
    title: "Lead Back End Developer",
    imgDesktop: require("../../static/DanielDesktop.png"),
    imgTablet: require("../../static/DanielTablet.png"),
    imgMobile:require("../../static/DanielMobile.png"),
  },
];
export default function WhoWeAre() {
  return (
    <Layout>
      <Container
        fluid
        className="backgroudWhoWeAre"
        style={{
          paddingTop: "130px",
        }}
      >
        <Container>
          <Row className="align-items-center text-center">
            <Col xs="12" sm="12">
              <Row className="align-items-center">
                <Col>
                  <p className="WhoTitle">Team Advanced Mankind.</p>
                </Col>
              </Row>
              <p className="who-p mx-sm-5 mx-3">
                Create tomorrow’s interfaces from across the globe.
              </p>
            </Col>
          </Row>
        </Container>
        <OneSizeDoesNotFill
          firstTitle={"One Size Does Not Fit All"}
          secondTitle={"It’s Time for Tomorrow’s Technology"}
          firstParagraph={
            "Your business is unique, with its own set of values and ace-in-the-hole products and features important to your brand. We’re dedicated to understanding the values of your brand and the motivation and mindset of your customers. We connect the dots to build digital solutions fit specifically for you."
          }
          secondParagraph={
            "Your business needs evolve. We create adaptable, future-proof products ready to evolve with you. We use a technology stack ahead of its time to execute product releases that are fast and flexible. It’s about time your site is ready for tomorrow’s customers, today. "
          }
        />
      </Container>
      <Container className="my-sm-5 my-5">
        <p className="WhoTitle">Our Team</p>
      </Container>
      <Container className="my-3">
        <Row>
          {team.map((pp, index) => {
            return (
              <TeamCard
                key={index}
                title={pp.title}
                name={pp.name}
                imgDesktop={pp.imgDesktop}
                imgTablet={pp.imgTablet}
                imgMobile={pp.imgMobile}
              />
            );
          })}
        </Row>
      </Container>
      <Container fluid>
      <WereHirin/>
      </Container>
    </Layout>
  );
}
