import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CaseStudyCard from "../../components/CaseStudyCard/CaseStudyCard";
import "./styles.css";
const CaseStudyPageImagesSection = () => {
  return (
    <Container>
      <Row className="justify-content-evenly ">
        <Col sm="12" md="6" lg="6" className="mb-3">
          <Link to="/Case-Studies/AnyClub/">
            <CaseStudyCard
              text="Anyclub App"
              imgsDesktop={[require("../../../static/phone1.png")]}
              imgsTablet={[require("../../../static/phone1Tablet.png")]}
            />
          </Link>
        </Col>
        <Col sm="12" md="6" lg="6" className="justify-content-center">
          <Row className="justify-content-center mb-3">
            <Col sm="12" md="12" lg="12" className="mb-3">
              <Link to="/Case-Studies/Chedraui">
                <CaseStudyCard
                  text="Chedraui E-commerce App"
                  imgsDesktop={[
                    require("../../../static/ImageChedrauiDesktop.png"),
                  ]}
                  imgsTablet={[
                    require("../../../static/imageChedrauiTablet.png"),
                  ]}
                />
              </Link>
            </Col>
          </Row>
          <Row className="justify-content-center mb-3">
            <Col sm="12" md="12" lg="12">
              <Link to="/Case-Studies/Logicalis/">
                <CaseStudyCard
                  text="Logicalis Dashboard"
                  imgsDesktop={[require("../../../static/motoDesktop.png")]}
                  imgsTablet={[require("../../../static/motoTablet.png")]}
                />
              </Link>
            </Col>
          </Row>
        </Col>
        {/* <Col sm="12" md="12" lg="12" className="mb-3">
          <Link to="/Case-Studies/Chedraui">
            <CaseStudyCard
              text="Chedraui E-commerce Platform"
              imgsDesktop={[
                require("../../../static/ImageChedrauiDesktop.png"),
              ]}
              imgsTablet={[require("../../../static/ImageChedrauiDesktop.png")]}
            />
          </Link>
        </Col> */}
      </Row>
    </Container>
  );
};

export default CaseStudyPageImagesSection;
