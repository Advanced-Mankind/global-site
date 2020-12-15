import React from "react";
import Layout from "../components/layout";
import Email from "../svgs/email";
import Phone from "../svgs/phone";
import styles from "../theme/index.module.css";

export default function WhoWeAre() {
  return (
    <Layout>
      <div className="row align-items-center m-0">
        <div className="col col-sm-6 p-0">
          <div className={`${styles.leftContent}`}>
            <div className="row">
              <div className="col-12 mt-3">
                <h1 className={styles.title}>
                  Sit tight we are working on it!{" "}
                </h1>
              </div>
              <div className="col-12">
                <p className={`${styles.subTitle} mb-0`}>
                  We can’ t wait to show you what we have created for our own
                  website, but we need a little more time. If you would like to
                  connect with us feel free to email or call and we will get
                  back to you shortly Stay safe!
                </p>
              </div>
            </div>
            <div className="mt-4 mb-4">
              <div className="row">
                <Email />
                <div className="col">
                  <a
                    href="mailto:hello@advancedmankind.com"
                    className={styles.subTitle}
                  >
                    hello@advancedmankind.com
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <Phone />
              <div className="col">
                <a href="tel:617 996 1338" className={styles.subTitle}>
                  (617) - 996 - 1338
                </a>
              </div>
            </div>
          </div>
          <img
            className={styles.background_mobile}
            src={require("../../static/background_mobile.png")}
            alt=""
          />
        </div>

        <div className="d-none d-sm-block col-sm-6 p-0 align-self-end">
          <img
            src={require("../../static/background.png")}
            className={styles.background_tablet}
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
}
