import React, { Component } from "react";
import { ReactSVG } from "react-svg";
import styles from "../theme/index.module.css";

export default class Logo extends Component {
  render() {
    return (
        <ReactSVG
        src="logo.svg"
        afterInjection={(error, svg) => {
          if (error) {
            console.error(error);
            return;
          }
          console.log(svg);
        }}
        beforeInjection={(svg) => {
          svg.classList.add(styles.logoFooter);
        }}
        wrapper="div"
        className="col-4 col-lg-8"
      />
    );
  }
}
