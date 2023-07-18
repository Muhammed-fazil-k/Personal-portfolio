import styles from "@/styles/Main.module.css";
import NavBar from "@/components/NavBar";
import Introduction from "@/components/Introduction";
import TechStacks from "@/components/TechStacks";

export default function Home() {
  return (
    <>
      <div className={styles["main-container"]}>
        <NavBar />
        <div className={styles["section"]} id="#">
          <Introduction/>
        </div>
        <div className={styles["section"]} id="techstacks">
        <TechStacks/>
        </div>
        <div className={styles["section"]} id="works">
        Works
        </div>
        <div className={styles["section"]} id="connect">
        Connect
        </div>

      </div>
    </>
  );
}
