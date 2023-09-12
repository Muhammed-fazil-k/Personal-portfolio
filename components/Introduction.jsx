import Image from "next/image";
import React, { useContext } from "react";
import styles from "../styles/Introduction.module.css";
import UserProfileContext from "@/context/UserContext";
const Introduction = () => {
  const { introduction } = useContext(UserProfileContext);
  return (
    <div className={styles["introduction-container"]}>
      <div className={styles["image-container"]}>
        <div className={styles["image-holder"]}>
          <Image
            src="/images/Profile.jpg"
            alt="profile"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className={styles["detail-container"]}>
        <p>Hello, I&apos;m <span style={{color:'#FF4136',fontWeight:'bold',fontSize:'1.2rem'}}> Muhammed Fazil K </span> <span>,{introduction}</span> </p>
        
      </div>
    </div>
  );
};

export default Introduction;
