import React from "react";
import {Row, Col} from "react-bootstrap";
import CandidateCard from "../Positions/candidateCard";
const ContainerPositions = () => {
  return (
    <Row>
    <Col sm="12" md="12" lg="12" className="cardDesktop">
      <div className="textCard">
      <CandidateCard/>
      </div>
    </Col>
    <Col sm="12" md="12" lg="12" className="cardTablet">
      <div className="textCard">
      <CandidateCard/>
      </div>
    </Col>
    <Col sm="12" md="12" lg="12" className="cardMobile">
      <div className="textCard">
        <CandidateCard/>
      </div>
    </Col>
  </Row>  
  );
          
};

export default ContainerPositions;

    
