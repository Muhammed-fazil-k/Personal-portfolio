import { getLocalData } from "@/lib/local-data";
import styles from "../styles/Blogs.module.css";
import NavBar from "@/components/NavBar";
import Layout from "@/components/Layout";

const Blog = ({ blog }) => {
  return (
    <div className={styles["blog-container"]}>
      <h2>{blog.title}</h2>
      <span>{blog.date}</span>
      <p>{blog.content}</p>
    </div>
  );
***REMOVED***

const BlogsPage = ({ blogs }) => {
  return (
    <Layout page="blogs">
      <div className={styles["blogs-container"]}>
        <h1>Blogs</h1>
        {blogs.map((blog) => {
          return (
            <Blog key={blog.id} blog={blog}>
              {blog.title}
            </Blog>
          );
        })}
      </div>
    </Layout>
  );
***REMOVED***

export async function getStaticProps() {
  const { blogs } = await getLocalData("blogs.json");
  return {
    props: {
      blogs,
    },
  ***REMOVED***
}

export default BlogsPage;
