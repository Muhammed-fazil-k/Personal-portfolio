import Image from "next/image";
import React from "react";
import styles from "../styles/Introduction.module.css";
const Introduction = () => {
  let detail = `Hello, I'm Muhammed Fazil K, a passionate web developer. Feel free to
  explore my portfolio to see some of my previous projects. If you have
  a project in mind or would like to discuss potential collaborations,
  don't hesitate to get in touch. Let's work together to bring your
  ideas to life and create impactful web experiences` 
  return (
    <div className={styles["introduction-container"]}>
      <div className={styles["image-container"]}>
        <Image
          src="/images/Profile.jpg"
          alt="profile"
          width={200}
          height={200}
        />
      </div>
      <div className={styles["detail-container"]}>
        <p>
          {detail}
        </p>
      </div>
    </div>
  );
};

export default Introduction;
