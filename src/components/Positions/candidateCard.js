import React, { useState } from "react";
import { Collapse, Button, Container, Row,} from "react-bootstrap";
import "./styles.css";
import CandidateList from "../Positions/candidateList"

const CandidateCard = ({title}) => {
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
          <Container fluid>
            <p>About the ideal candidate:</p>
            <Row>
             <CandidateList/>
             <p>
             If this job opportunity sounds like you, we should chat!
             </p>
             <Button style={{ borderRadius: '34px', fontSize: '18px', color:"#3333FF" }}>
                  Apply
                </Button>
            </Row>
          </Container>
        </Collapse>
      </Row>
    </Container>
  );
};

export default CandidateCard;
