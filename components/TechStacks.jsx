import Image from "next/image";
import React, { useContext } from "react";
import styles from "../styles/TechStacks.module.css";
import UserProfileContext from "@/context/UserContext";

const TechStack = ({techstack}) => {
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
        <h3>{techstack.name}</h3>
        <p>
        {techstack.description}
        </p>
      </div>
    </div>
  );
};

const TechStacks = () => {
  const { techstacks } = useContext(UserProfileContext);
  return (
    <div className={styles["techstacks-container"]}>
      <div className={styles["techstacks-title"]}>
        <h1>TechStacks</h1>
      </div>
      <div className={styles["techstacks-items"]}>
        {techstacks.map((techStack) => <TechStack key={techStack.id} techstack = {techStack}/>
        )}
      </div>
    </div>
  );
};

export default TechStacks;
