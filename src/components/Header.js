import React, { Component } from "react";
import { ReactSVG } from "react-svg";

export default class Header extends Component {
  render() {
    return (
      <div>
        <ReactSVG
          src="svg.svg"
          afterInjection={(error, svg) => {
            if (error) {
              console.error(error);
              return;
            }
            console.log(svg);
          }}
          beforeInjection={(svg) => {
            svg.classList.add("svg-class-name");
            svg.setAttribute("style", "width: 135px");
          }}
          evalScripts="always"
          fallback={() => <span>Error!</span>}
          loading={() => <span>Loading</span>}
          renumerateIRIElements={false}
          wrapper="span"
          className="wrapper-class-name"
          onClick={() => {
            console.log("wrapper onClick");
          }}
        />
      </div>
    );
  }
}
