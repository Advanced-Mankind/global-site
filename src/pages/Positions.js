import React from "react";
import Layout from "../components/layout";
import styles from "../theme/index.module.css";
import {Container } from "react-bootstrap";
import ContainerPositions from "../components/Positions/containerPositions"

export default function Positions() {
const positionsList=["UI/UX Designer","Project Manager", "Copy Writer", "Creative Director", "Bisiness Analytics"]
const titleItems = positionsList.map((data) => (
   <p>{data}</p>
));
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
      <ContainerPositions/>
      <ContainerPositions/>
      <ContainerPositions/>
      <ContainerPositions/>
      <ContainerPositions/>
      </Container>
      </div>
    </Layout>
  );
}

