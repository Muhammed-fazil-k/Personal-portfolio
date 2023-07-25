import Image from "next/image";
import React, { useContext } from "react";
import styles from "../styles/Introduction.module.css";
import UserProfileContext from "@/context/UserContext";
const Introduction = () => {
  console.log("Introduction : render");
  const {introduction} = useContext(UserProfileContext)
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
          {introduction}
        </p>
      </div>
    </div>
  );
***REMOVED***

export default Introduction;
