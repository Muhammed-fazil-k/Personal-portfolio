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
      <div className={styles["logo"]}>
        <Link href="#">Fazil</Link>
      </div>
      <div className={styles["nav-links"]}>
        <ul>
          <li>
            <SmoothScrollLink to="introduction">About me</SmoothScrollLink>
          </li>
          <li>
            <SmoothScrollLink to="skills">Skills</SmoothScrollLink>
          </li>
          <li>
            <SmoothScrollLink to="contact">Contact</SmoothScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
***REMOVED***

export default NavBar;
