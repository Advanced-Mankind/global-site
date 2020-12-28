import React from "react";
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
                <h1 className={styles.title}>That's no good! </h1>
              </div>
              <div className="col-12">
                <p className={`${styles.subTitle} mb-0`}>
                  We are going to send you back to a safe space where things
                  don't wilt or die.
                </p>
              </div>
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
