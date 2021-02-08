import React from "react";
import { Button, Col } from "react-bootstrap";
import Layout from "../components/layout";
import styles from "../theme/index.module.css";
// import "../components/Error404/styles.css";
export default function Error404() {
  return (
    <Layout>
      <div className={`row align-items-center m-0`}>
        <div className="col-sm-5 p-0">
          <div className={`${styles.leftContent}`}>
            <div className="row">
              <div className="col-12 mt-3">
                <img
                  className={styles.logoOops}
                  src={require("../../static/oops.png")}
                  alt=""
                />
                <p className={styles.title}>That's no good! </p>
              </div>
              <div className="col-11 col-lg-10">
                <p className={`${styles.subTitle} mb-0`}>
                  We are going to send you back to a safe space where things
                  don't wilt or die.
                </p>
              </div>
              <Col>
                <Button
                  style={{
                    borderRadius: "34px",
                    backgroundColor: "#3333FF",
                    borderColor: "#3333FF",
                    color: "#FFFFFF",
                    fontFamily: "Open Sans",
                    fontSize: "18px",
                    fontWeight: "bold",
                    lineHeight: "24px",
                    textAlign: "center",
                    padding: "15px 20px",
                    marginTop: "40px",
                  }}
                >
                  GO BACK HOME
                </Button>
              </Col>
            </div>
          </div>
          <img
            className={styles.background_mobile}
            src={require("../../static/messageError.png")}
            alt=""
          />
        </div>

        <div className="d-none d-sm-block col-sm-7 p-0 align-self-end">
          <img
            src={require("../../static/messageError.png")}
            className={styles.background_tablet}
            alt=""
          />
        </div>
        <div className={styles.curveBackgroundBottom}>
          <div className="curveBackgroundHeight"></div>
        </div>
      </div>
    </Layout>
  );
}
