import styles from "@/styles/Main.module.css";
import Introduction from "@/components/Introduction";
import TechStacks from "@/components/TechStacks";
import {getLocalData} from '../lib/local-data';
import UserProfileContext from "@/context/UserContext";
import Layout from "@/components/Layout";

export default function Home({data}) {
  console.log("Main page : renders");
  return (
    <UserProfileContext.Provider value={data}>
      <Layout page="home">
      <div className={styles["main-container"]}>
        <div className={styles["section"]} id="#">
          <Introduction />
        </div>
        <div className={styles["section"]} id="techstacks">
          <TechStacks />
        </div>
      </div>
      </Layout>
    </UserProfileContext.Provider>
  );
}

export async function getStaticProps(){
  //const res = await fetch('http://localhost:3000/api/staticdata');
  // const content =await res.json();
  // console.log(typeof content);
  console.log("Main page : getStaticProps called");
  const data = await getLocalData('personal.json');
  return {
    props:{
      data
    }
  }
}
