import { Link } from "gatsby";
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
        <Link className="w-100" to="/Case-Studies/Logicalis">
          <Col sm="12" md="12" lg="12" className="cardPageContainer">
            <img
              src={require("../../../static/caseStudiesPageMotoDesktop.png")}
              alt={require("../../../static/caseStudiesPageMotoDesktop.png")}
            />
          </Col>
        </Link>
        <Link className="w-100" to="/Case-Studies/Chedraui">
          <Col sm="12" md="12" lg="12" className="cardPageContainer">
            <img
              src={require("../../../static/caseStudiesPageChedrahuiDesktop.png")}
              alt={require("../../../static/caseStudiesPageChedrahuiDesktop.png")}
            />
          </Col>
        </Link>
        <Link className="w-100" to="/Case-Studies/AnyClub">
          <Col className="cardPageContainer" sm="12" md="12" lg="12">
            {chedrahuiDesktop.map((img) => (
              <img src={img} alt={img} key={img} />
            ))}
          </Col>
        </Link>
      </Row>
      <Row sm="12" md="12" lg="12" className="cardTablet">
        <Link className="w-100" to="/Case-Studies/Logicalis">
          <div className="cardPageContainer">
            <img
              src={require("../../../static/caseStudiesPageMotoTablet.png")}
              alt={require("../../../static/caseStudiesPageMotoTablet.png")}
            />
          </div>
        </Link>

        <Link className="w-100" to="/Case-Studies/Chedraui">
          <div className="cardPageContainer">
            <img
              src={require("../../../static/caseStudiesPageChedrahuiTablet.png")}
              alt={require("../../../static/caseStudiesPageChedrahuiTablet.png")}
            />
          </div>
        </Link>

        <Link className="w-100" to="/Case-Studies/AnyClub">
          <div className="cardPageContainer">
            {chedrahuiTablet.map((img) => (
              <img src={img} alt={img} key={img} />
            ))}
          </div>
        </Link>
      </Row>
      <Row sm="12" md="12" lg="12" className="cardMobile">
        <Link className="w-100" to="/Case-Studies/Logicalis">
          <div className="cardPageContainer">
            <img
              src={require("../../../static/caseStudiesPageMotoMobile.png")}
              alt={require("../../../static/caseStudiesPageMotoMobile.png")}
            />
          </div>
        </Link>

        <Link className="w-100" to="/Case-Studies/Chedraui">
          <div className="cardPageContainer">
            <img
              src={require("../../../static/caseStudiesPageChedrahuiMobile.png")}
              alt={require("../../../static/caseStudiesPageChedrahuiMobile.png")}
            />
          </div>
        </Link>

        <Link className="w-100" to="/Case-Studies/AnyClub">
          <div className="cardPageContainer">
            {chedrahuiMobile.map((img) => (
              <img src={img} alt={img} key={img} />
            ))}
          </div>
        </Link>
      </Row>
    </Container>
  );
};

export default CaseStudyPageImagesSection;
