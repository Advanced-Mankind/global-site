import React from "react";
import { Container, Col, Button } from "react-bootstrap";
import Layout from "../components/layout";
import ContainerPositions from "../components/Positions/containerPositions";
import styles from "../theme/index.module.css";
import ContainerPopup from "../components/PositionsPopup/containerPopup";
import CandidateCard from "../components/Positions/candidateCard";
export default function Positions() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Layout>
      <div
        className="row align-items-center m-0"
        style={{
          paddingTop: "90px",
        }}
      >
        <div className="col col-sm-6 p-0">
          <div className={`${styles.leftContent}`}>
            <div className="row">
              <div className="col-12 mt-3">
                <h1 className={styles.title}>
                  We are looking for our next team members!{" "}
                </h1>
              </div>
              <div className="col-12">
                <p className={`${styles.subTitle} mb-0`}>
                  If you see a position that you are interested in please email
                  us your resume and we will get back to you to start the
                  interview process. We take onboarding very seriously so please
                  only apply in your serious about the position.
                </p>
              </div>
              <div
                className="col-12"
                style={{ marginTop: "26px", marginLeft: "-12px" }}
              >
                <ul id={styles.positionsUl} className="ulPositions">
                  <li>Work from anywhere</li>
                  <li>Unique benefits</li>
                  <li>Competetive salary</li>
                  <li>$1000 annual tech bonus</li>
                </ul>
              </div>
              <Col xs="12" sm="6">
                <Button
                  onClick={() => setModalShow(true)}
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
                    lineHeight: "24px",
                  }}
                >
                  APPLY TODAY
                </Button>
              </Col>
            </div>
          </div>
        </div>
        <div className="d-none d-sm-block col-sm-6 p-0">
          <img
            src={require("../../static/positionsMobile.png")}
            className={styles.background_tablet}
            alt=""
          />
        </div>
        <Col className={"mt-5"} sm="8" md="12" lg="12">
          <p className={styles.title} style={{ textAlign: "center" }}>
            Available Positions
          </p>
        </Col>
        <Container>
          <Col sm="12" md="12" lg="12" className="cardDesktop">
            <div className="textCard">
              <CandidateCard setShow={setModalShow} />
            </div>
          </Col>
          <Col sm="12" md="12" lg="12" className="cardTablet">
            <div className="textCard">
              <CandidateCard setShow={setModalShow} />
            </div>
          </Col>
          <Col sm="12" md="12" lg="12" className="cardMobile">
            <div className="textCard">
              <CandidateCard setShow={setModalShow} />
            </div>
          </Col>
          <Col sm="12" md="12" lg="12" className="cardDesktop">
            <div className="textCard">
              <CandidateCard setShow={setModalShow} />
            </div>
          </Col>
          <Col sm="12" md="12" lg="12" className="cardTablet">
            <div className="textCard">
              <CandidateCard setShow={setModalShow} />
            </div>
          </Col>
          <Col sm="12" md="12" lg="12" className="cardMobile">
            <div className="textCard">
              <CandidateCard setShow={setModalShow} />
            </div>
          </Col>
          <Col sm="12" md="12" lg="12" className="cardDesktop">
            <div className="textCard">
              <CandidateCard setShow={setModalShow} />
            </div>
          </Col>
          <Col sm="12" md="12" lg="12" className="cardTablet">
            <div className="textCard">
              <CandidateCard setShow={setModalShow} />
            </div>
          </Col>
          <Col sm="12" md="12" lg="12" className="cardMobile">
            <div className="textCard">
              <CandidateCard />
            </div>
          </Col>
        </Container>
        <ContainerPopup
          show={modalShow}
          setShow={setModalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </Layout>
  );
}
