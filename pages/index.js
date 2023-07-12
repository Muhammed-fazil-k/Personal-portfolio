import styles from "@/styles/Main.module.css";
import NavBar from "@/components/NavBar";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <>
      <div className={styles["main-container"]}>
        <NavBar />
        <div className={styles["section"]} id="introduction">
          <Introduction/>
        </div>
        <div className={styles["section"]} id="skills">
          Skills
        </div>
        <div className={styles["section"]} id="contact">
          Contact
        </div>

      </div>
    </>
  );
}
