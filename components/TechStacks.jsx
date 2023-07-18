import Image from "next/image";
import React from "react";
import styles from "../styles/TechStacks.module.css";

const TechStack = () => {
  return (
    <div className={styles["techstack-container"]}>
      <div className={styles["techstack-image"]}>
        <Image
          src={"https://dummyimage.com/150x150"}
          alt="Technology"
          width={150}
          height={150}
        />
      </div>
      <div className={styles["techstack-detail"]}>
        <h3>React</h3>
        <p>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to
        </p>
      </div>
    </div>
  );
***REMOVED***

const TechStacks = () => {
  return (
    <div className={styles["techstacks-container"]}>
      <div className={styles["techstacks-title"]}>
        <h1>TechStacks</h1>
      </div>
      <div className={styles["techstacks-items"]}>
        <TechStack />
        <TechStack />
        <TechStack />
      </div>
    </div>
  );
***REMOVED***

export default TechStacks;
