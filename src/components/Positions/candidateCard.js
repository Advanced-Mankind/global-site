import React, { useState } from "react";
import { Collapse, Button, Container, Row,Col } from "react-bootstrap";
import "./styles.css";

const CandidateCard = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Row>
        <h1 className="title">UI/UX Designer</h1>
        <Button
          style={{
            backgroundColor: "#FFFFFF",
            color: "#FFFFFF",
            borderColor: "#FFFFFF",
          }}
          onClick={() => setOpen(!open)}
        >
          {!open ? (
            <img src={require("../../../static/arrowDown.png")} alt="" />
          ) : (
            <img src={require("../../../static/arrowUp.png")} alt="" />
          )}
        </Button>
        <Collapse in={open}>
          <Container>
          <div>About the ideal candidate:</div>
          
        
           <Row>
           
             <img src={require("../../../static/cornerRight.svg")} alt="" />
           <div className="text">Minimum of 4 years of design experience</div></Row>
           </Container>
        </Collapse>
      </Row>
    </Container>
  );
};

export default CandidateCard;
