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
            <p
              style={{
                fontFamily: "Open Sans",
                fontSize: "15px",
                fontWeight: "bold",
                lineHeight: "20px",
              }}
            >
              About the ideal candidate:
            </p>
            <Row>
              <CandidateList />
              <Col className="cardMobile" sm="12">
                <Button
                  style={{
                    borderRadius: "34px",
                    backgroundColor: "#3333FF",
                    color: "#FFFFFF",
                    marginTop: "28px",
                    marginBottom: "30px",
                    width: "100%",
                    padding: "13px",
                    alignItems: "center",
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    fontWeight: "bold",
                    lineHeight: "16px",
                  }}
                >
                  APPLY
                </Button>
              </Col>
              <Col md="12" className="cardTablet">
                <Button
                  className="col col-sm-2 "
                  style={{
                    borderRadius: "34px",
                    backgroundColor: "#3333FF",
                    color: "#FFFFFF",
                    marginTop: "28px",
                    marginBottom: "30px",
                    width: "100%",
                    padding: "13px",
                    alignItems: "center",
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    fontWeight: "bold",
                    lineHeight: "16px",
                  }}
                >
                  APPLY
                </Button>
              </Col>

              <Col lg="8" className="cardDesktop">
                <Button
                  className="col col-sm-2 "
                  style={{
                    borderRadius: "34px",
                    backgroundColor: "#3333FF",
                    color: "#FFFFFF",
                    marginTop: "28px",
                    marginBottom: "30px",
                    width: "100%",
                    padding: "13px",
                    alignItems: "center",
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    fontWeight: "bold",
                    lineHeight: "16px",
                  }}
                >
                  APPLY
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
