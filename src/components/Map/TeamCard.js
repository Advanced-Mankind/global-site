import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const TeamCard = ({ title, name, imgDesktop, imgTablet, imgMobile }) => {
  return (
    <div>
      <Container className="cardMobile">
        <Container fluid className="mx-sm-5 mx-3 my-5">
          <Col xs="12">
            <Container className="img-Team">
              <img className="w-100% h-100%"src={imgMobile} />
            </Container>
            <div className=" mx-0 my-2">
              <p className="title-Position mb-0">{title}</p>
              <p className="name">{name}</p>
            </div>
          </Col>
        </Container>
      </Container>

      <Container className="cardTablet">
        <Container fluid className="mx-sm-5 mx-3 my-5">
          <Col md="6">
            <Container className="img-Team">
              <img src={imgTablet} />
            </Container>
            <div className=" mx-0 mt-4 mb-5 containerName">
              <p className="title-Position mb-0">{title}</p>
              <p className="name mw-100">{name}</p>
            </div>
          </Col>
        </Container>
      </Container>

      <Container className="cardDesktop">
        <Col lg="4">
          <Container className="img-Team">
            <img src={imgDesktop} />
          </Container>
          <div className=" mx-0 mt-4 mb-5 containerName">
            <p className="title-Position mb-0">{title}</p>
            <p className="name mw-100">{name}</p>
          </div>
        </Col>
      </Container>
    </div>
  );
};
export default TeamCard;
