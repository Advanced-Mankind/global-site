import React, { Component } from "react";
import { ReactSVG } from "react-svg";

export default class Phone extends Component {
  render() {
    return (
        <ReactSVG
        src="phone.svg"
        afterInjection={(error, svg) => {
          if (error) {
            console.error(error);
            return;
          }
        }}
        beforeInjection={(svg) => {
          svg.classList.add("svg-icon");
          svg.setAttribute("style", "width: 20px, height: 20px");
        }}
        wrapper="div"
        className="col-1"
      />
    );
  }
}
