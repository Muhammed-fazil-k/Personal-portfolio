import React from "react";
import styles from "../styles/Button.module.css";
const Button = ({ type, onClick,children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles["button"]}
    >
      {children}
    </button>
  );
***REMOVED***

export default Button;
