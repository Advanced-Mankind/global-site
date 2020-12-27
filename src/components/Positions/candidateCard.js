import React, { useState } from "react";
import { Collapse, Button, Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import CandidateList from "../Positions/candidateList";

const CandidateCard = ({ title }) => {
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
            <p>About the ideal candidate:</p>
            <Row>
              <CandidateList />
              <Row className="cardMobile">
                <p style={{ marginLeft: "15px", marginRight: "15px" }}>
                  If this job opportunity sounds like you, we should chat!
                </p>
                <Button
                  style={{
                    borderRadius: "34px",
                    backgroundColor: "#3333FF",
                    marginLeft: "15px",
                    marginBottom: "20px",
                  }}
                >
                  Apply
                </Button>
              </Row>

              <Col sm="12" md="12" lg="12" className="cardTablet">
                <p className="col col-sm-10">
                  If this job opportunity sounds like you, we should chat!
                </p>
                <Button
                  className="col col-sm-2 "
                  style={{ borderRadius: "34px", backgroundColor: "#3333FF" }}
                >
                  Apply
                </Button>
              </Col>

              <Col sm="12" md="12" lg="12" className="cardDesktop">
                <p className="col col-sm-11">
                  If this job opportunity sounds like you, we should chat!
                </p>
                <Button
                  className="col col-sm-1 "
                  style={{ borderRadius: "34px", backgroundColor: "#3333FF" }}
                >
                  Apply
                </Button>
              </Col>
            </Row>
          </Container>
        </Collapse>
      </Row>
    </Container>
  );
};

export default CandidateCard;
