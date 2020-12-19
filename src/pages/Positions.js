import React from "react";
import Layout from "../components/layout";
import CandidateCard from "../components/Positions/candidateCard";
import styles from "../theme/index.module.css";
import {Row, Col, Container } from "react-bootstrap";
export default function Positions() {
  return (
    <Layout>
      <div className="row align-items-center m-0">
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
            </div>
          </div>
          <img
            className={styles.background_mobile}
            src={require("../../static/positionsMobile.png")}
            alt=""
          />
        </div>

        <div className="d-none d-sm-block col-sm-6 p-0 align-self-end">
          <img
            src={require("../../static/positionsMobile.png")}
            className={styles.background_tablet}
            alt=""
          />
        </div>
        <Container>
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
      
    </Container>
      </div>
    </Layout>
  );
}
