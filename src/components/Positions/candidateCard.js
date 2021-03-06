import React, { useState } from "react";
import { Collapse, Button, Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import CandidateList from "../Positions/candidateList";

const CandidateCard = (props) => {
  const { info } = props;
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Row>
        <h1 className="title">{info.area}</h1>
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
            <p>{info.description}</p>
            <p
              style={{
                fontFamily: "Open Sans",
                fontSize: "15px",
                fontWeight: "bold",
                lineHeight: "20px",
              }}
            >
              Responsibilities
            </p>
              <CandidateList data={info.responsibilities} />
              <p
                style={{
                  fontFamily: "Open Sans",
                  fontSize: "15px",
                  fontWeight: "bold",
                  lineHeight: "20px",
                }}
              >
                Requirements
              </p>
              <CandidateList data={info.requirements} />
              <Col className="cardMobile" sm="12">
                <Button
                  onClick={() => props.setShow(true)}
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
                  onClick={() => props.setShow(true)}
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
                  onClick={() => props.setShow(true)}
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
          </Container>
        </Collapse>
      </Row>
    </Container>
  );
};

export default CandidateCard;
