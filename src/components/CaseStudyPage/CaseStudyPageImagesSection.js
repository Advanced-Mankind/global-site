import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";

const CaseStudyPageImagesSection = ({
  desktopImgs,
  tabletImgs,
  mobileImgs,
  chedrahuiDesktop,
  chedrahuiTablet,
  chedrahuiMobile,
}) => {
  return (
    <Container>
      <Row className="cardDesktop">
        {desktopImgs.map((img) => (
          <Col sm="12" md="12" lg="12" className="cardPageContainer">
            <img src={img} alt={img} key={img} />
          </Col>
        ))}
        <Col className="cardPageContainer" sm="12" md="12" lg="12">
          {chedrahuiDesktop.map((img) => (
            <img src={img} alt={img} key={img} />
          ))}
        </Col>
      </Row>
      <Row sm="12" md="12" lg="12" className="cardTablet">
        {tabletImgs.map((img) => (
          <div className="cardPageContainer">
            <img src={img} alt={img} key={img} />
          </div>
        ))}
        <div className="cardPageContainer">
          {chedrahuiTablet.map((img) => (
            <img src={img} alt={img} key={img} />
          ))}
        </div>
      </Row>
      <Row sm="12" md="12" lg="12" className="cardMobile">
        {mobileImgs.map((img) => (
          <div className="cardPageContainer">
            <img src={img} alt={img} key={img} />
          </div>
        ))}
        <div className="cardPageContainer">
          {chedrahuiMobile.map((img) => (
            <img src={img} alt={img} key={img} />
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default CaseStudyPageImagesSection;
