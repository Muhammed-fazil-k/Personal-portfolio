import styles from "@/styles/Main.module.css";
import NavBar from "@/components/NavBar";
import Introduction from "@/components/Introduction";
import TechStacks from "@/components/TechStacks";
import {getLocalData} from '../lib/local-data';
import UserProfileContext from "@/context/UserContext";
import Connect from "@/components/Connect";

export default function Home({data}) {
  return (
    <UserProfileContext.Provider value={data}>
      <div className={styles["main-container"]}>
        <NavBar />
        <div className={styles["section"]} id="#">
          <Introduction />
        </div>
        <div className={styles["section"]} id="techstacks">
          <TechStacks />
        </div>
        {/* <div className={styles["section"]} id="works">
          Works
        </div> */}
        <div className={styles["section"]} id="connect">
          <Connect/>
        </div>
      </div>
    </UserProfileContext.Provider>
  );
}

export async function getStaticProps(){
  //const res = await fetch('http://localhost:3000/api/staticdata');
  // const content =await res.json();
  // console.log(typeof content);
  const data = await getLocalData();
  return {
    props:{
      data
    }
  }
}
