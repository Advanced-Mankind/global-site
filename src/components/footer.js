import React, { Component } from "react";
import styles from "../theme/index.module.css";
import Logo from "../svgs/logo";
export default class Footer extends Component {
  render() {
    return (
      <footer className={`${styles.footer}`}> 
        <div className="row">
          <hr class={`${styles.separator} col mx-4`}></hr>
        </div>
        <div className="row">
          <Logo />
          <div className="col col-lg-4">
            <p className={styles.footerText}>
              2020 © Advanced Mankind, North America, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
