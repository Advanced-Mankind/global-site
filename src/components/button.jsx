import React from "react";
import PropTypes from "prop-types";
import styles from "../theme/index.module.css";

//Componente funcional
const Button = ({ text }) => (
  <button
    className={styles.buttonError}
    onClick={() => {
      console.log("onClick en el button");
    }}
  >
    <span>{text}</span>
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
