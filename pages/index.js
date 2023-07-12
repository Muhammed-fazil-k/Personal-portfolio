import styles from "@/styles/Main.module.css";
import NavBar from "@/components/NavBar";


export default function Home() {
  return (
    <>
      <div className={styles["main-container"]}>
        <NavBar />
      </div>
    </>
  );
}
