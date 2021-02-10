import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import TeamCard from "../components/Map/TeamCard";
import OneSizeDoesNotFill from "../components/OneSizeDoesNotFit/OneSizeDoesNotFill";
import WereHirin from "../components/WereHiring/WereHiring";
import "../components/who-whe-are.css";
const team = [
  {
    name: "Fernando Higuera",
    title: "Co-Owner",
    imgDesktop: require("../../static/FernandoHiguera.png"),
    imgTablet: "",
    imgMobile: "",
  },
  {
    name: "Emily Allamon",
    title: "CEO",
    imgDesktop: require("../../static/EmilyAllamon.png"),
    imgTablet: "",
    imgMobile: "",
  },
  {
    name: "Scott Prather",
    title: "Creative Director",
    imgDesktop: require("../../static/ScottPrather.png"),
    imgTablet: "",
    imgMobile: "",
  },
];
export default function WhoWeAre() {
  return (
    <Layout>
      <Container
        fluid
        className="bg-white px-0"
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
      <Container className="my-5">
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
      <WereHirin />
    </Layout>
  );
}
