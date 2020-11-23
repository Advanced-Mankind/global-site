import React, { Component } from "react";
import { ReactSVG } from "react-svg";
import styles from "../theme/index.module.css";

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <ReactSVG
        src="svg.svg"
        afterInjection={(error, svg) => {
          if (error) {
            console.error(error);
            return;
          }
        }}
        beforeInjection={(svg) => {
          svg.classList.add(styles.logoHeader);
        }}
        wrapper="div"
        className="col-4 col-lg-8"
      />
      </div>
    );
  }
}
