import styles from "@/styles/Main.module.css";
import Introduction from "@/components/Introduction";
import TechStacks from "@/components/TechStacks";
import { getLocalData } from "../lib/local-data";
import UserProfileContext from "@/context/UserContext";
import Layout from "@/components/Layout";
import { AuthProvider } from "@/context/AuthContext";

export default function Home({ data }) {
  return (
      <UserProfileContext.Provider value={data}>
        <Layout page="home">
          <div className={styles["main-container"]}>
            <div className={styles["section"]} id="#">
              <Introduction />
            </div>
            <div style={{backgroundColor:'rgb(235, 241, 246)'}} className={styles["section"]} id="techstacks">
              <TechStacks />
            </div>
          </div>
        </Layout>
      </UserProfileContext.Provider>
  );
}

export async function getStaticProps() {
  const data = await getLocalData("personal.json");
  return {
    props: {
      data,
    },
  };
}
