import React from "react";
import styles from "../styles/Input.module.css";
const Input = ({ type, placeholder, onChange,className,name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      className={`${styles["input"]} ${styles[className]}`}
    />
  );
};

export default Input;
