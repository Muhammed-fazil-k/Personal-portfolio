import React from "react";
import { LinkedinIcon, TwitterIcon,InstagramIcon } from "next-share";
import Link from "next/link";
import styles from '../styles/Connect.module.css'
function Connect() {
  const iconStyle = {
    filter: "grayscale(100%)",
  ***REMOVED***
  return (
    <div className={styles["connect-container"]} id="connect">
        <h4>

      Lets Connect ♥️
        </h4>
      <div className={styles["icons-container"]}>
        <Link href={"https://www.linkedin.com/in/muhammed-fazil-k-41814a197/"} target="_blank">
          <LinkedinIcon size={52} round />
        </Link>
        <Link href={"https://twitter.com/Fazil__K"} target="_blank">
          <TwitterIcon size={52} round />
        </Link>
        <Link href={"https://instagram.com/fasszzil"} target="_blank">
          <InstagramIcon size={52} round />
        </Link>
      </div>
    </div>
  );
}

export default Connect;
