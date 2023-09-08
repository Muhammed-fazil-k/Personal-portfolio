import { getLocalData } from "@/lib/local-data";
import styles from "../../styles/Blogs.module.css";
import Layout from "@/components/Layout";
import { useContext, useState } from "react";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";
import Button from "@/components/Button";
import FirebaseAuthContext from "@/context/FireaseAuthContext";

const BlogsPage = ({ blogs }) => {
  const { user, error } = useContext(AuthContext);
  const {firebaseUser,} = useContext(FirebaseAuthContext)
  console.log("User data from BlogsPage: ", firebaseUser);
  return (
    <Layout page="blogs">
      <div className={styles["blogs-container"]}>
        <h1>Blogs</h1>
        {firebaseUser && (
          <Button>
            <Link href="/blogs/create">New Post</Link>
          </Button>
        )}
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

export async function getServerSideProps() {
  const { blogs } = await getLocalData("blogs.json");
  return {
    props: {
      blogs,
    },
  };
}

// export async function getStaticProps() {
//   console.log("Blogs page : getStaticProps called");
//   const { blogs } = await getLocalData("blogs.json");
//   return {
//     props: {
//       blogs,
//     },
//   };
// }

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
  const shortContent = blog.content.length < maxContentLength;
  return (
    <div className={styles["blog-container"]}>
      <Link href={`/blogs/${blog.id}`}>
        <h2>{blog.title}</h2>
        <span>{blog.date}</span>
        <p>
          {contentToDisplay}
          {!shortContent && (
            <Link href={`/blogs/${blog.id}`}>...read more</Link>
          )}
        </p>
      </Link>
    </div>
  );
};

export default BlogsPage;
