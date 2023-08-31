import Link from "next/link";
import React, { useContext } from "react";
import styles from "../styles/NavBar.module.css";
import { Link as ScrollLink } from "react-scroll";
import AuthContext from "@/context/AuthContext";
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
  var isHomePage = page === "home";
  const { user,logout } = useContext(AuthContext);
  console.log("NavBar user: ", user);
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
        {!user ? (
          <li>
            <Link href="/auth/login" className={styles["nav-link"]}>
              Login
            </Link>
          </li>
        ) : (
          <li>
            <a onClick={logout} className={styles["nav-link"]}>
              Logout
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
***REMOVED***

export default NavBar;
