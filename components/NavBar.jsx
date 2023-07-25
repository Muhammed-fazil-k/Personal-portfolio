import Link from "next/link";
import React from "react";
import styles from "../styles/NavBar.module.css";
import { Link as ScrollLink } from "react-scroll";
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

const NavBar = ({ page }) => {
  console.log("Navbar : render");
  var isHomePage = page === "home";
  var isBlogsPage = page === "blogs";
  return (
    <nav className={styles["navbar-container"]}>
      <ul>
        <li>
          <Link href="/" className={styles["nav-link"]}>
            Home
          </Link>
        </li>
        {isHomePage && (
          <li>
            <SmoothScrollLink to="techstacks">Techstacks</SmoothScrollLink>
          </li>
        )}
        {/* <li>
            <SmoothScrollLink to="works">Works</SmoothScrollLink>
          </li> */}
        <li>
          <Link href="/blogs" className={styles["nav-link"]}>
            Blogs
          </Link>
        </li>
        <li>
          <SmoothScrollLink to="connect">Connect</SmoothScrollLink>
        </li>
      </ul>
    </nav>
  );
***REMOVED***

export default NavBar;
