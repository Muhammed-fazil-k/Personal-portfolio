import Link from "next/link";
import React from "react";
import styles from "../styles/NavBar.module.css";
import { Link as ScrollLink} from "react-scroll";
//INtroduction
//skills
//Contacts
const SmoothScrollLink = ({ to, children }) => {

  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      className={styles["nav-link"]}
      activeClass={styles["active-link"]}
    >
      {children}
    </ScrollLink>
  );
***REMOVED***

const NavBar = () => {
  return (
    <nav className={styles["navbar-container"]}>
        <ul>
          <li>
            <SmoothScrollLink to="#">Home</SmoothScrollLink>
          </li>
          <li>
            <SmoothScrollLink to="techstacks">Techstacks</SmoothScrollLink>
          </li>
          <li>
            <SmoothScrollLink to="works">Works</SmoothScrollLink>
          </li>
          <li>
            <SmoothScrollLink to="connect">Connect</SmoothScrollLink>
          </li>
        </ul>
    </nav>
  );
***REMOVED***

export default NavBar;
