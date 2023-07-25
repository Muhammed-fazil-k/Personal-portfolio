import { getLocalData } from "@/lib/local-data";
import styles from "../../styles/Blogs.module.css";
import NavBar from "@/components/NavBar";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import Link from "next/link";

//content toggle feature logic 
// if our content is greater than a particular value 
// then only show links to toggle content.
// keep a state variable to store state of content
// get the content to display based on the above state variable

const Blog = ({ blog }) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const maxContentLength = 100;
  const contentToDisplay = showFullContent
    ? blog.content
    : blog.content.substr(0, maxContentLength);
  return (
    <div className={styles["blog-container"]}>
      <h2>{blog.title}</h2>
      <span>{blog.date}</span>
      <p>
        {contentToDisplay}
        {(
          <Link href={`/blogs/${blog.id}`}>
            ...read more
          </Link>
        )}
      </p>
    </div>
  );
};

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
};

export async function getStaticProps() {
  const { blogs } = await getLocalData("blogs.json");
  return {
    props: {
      blogs,
    },
  };
}

export default BlogsPage;
