
import { getBlogById } from "@/lib/blogs-crud";
import React, { useState } from "react";
import styles from '../../styles/Blogs.module.css';
import Link from "next/link";
const BlogPage = ({blog}) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const maxContentLength = 400;
  const contentToDisplay = showFullContent
    ? blog.content
    : blog.content.substr(0, maxContentLength);

  function handleToggleContent() {
    setShowFullContent(!showFullContent);
  }
  return <div className={styles["blog-page"]}>
    {blog && <div className={styles["blog-post"]}>
      <Link href='/blogs'> ← Go back</Link>
      <h2>{blog.title}</h2>
      <span>{blog.date}</span>
      <p>
        {contentToDisplay}
        {blog.content.length > maxContentLength && (
          <a onClick={handleToggleContent}>
            {showFullContent ? "...less" : "...more"}
          </a>
        )}
      </p>
    </div>
    }</div>;
};

export async function getServerSideProps({params}){
  const blog = await getBlogById(params.slug);
  return {
    props: {
            blog,
        }
    }
}


// export async function getStaticProps ({params}){
//   console.log('GetStaticProps params ',params.slug);
//   const blog = await getBlogById(params.slug);
//   return {
//     props: {
//             blog,
//         }
//     }
//   }

//   //runs at build time . this will be used to pre generate pages
//   export async function getStaticPaths() {
//     //all possible slugs
//     const blogs = await getAllBlogs();
//     const allSlugs = ["1"];
//     //The paths array should be like below
//     // [{ params: 1 }, { params: 2 }];
//     let paths = null;
//     if(blogs){
//       paths = blogs.map((blog) => {
//         const slug = String(blog.id)
//         return { params: { slug } };
//       });
//       console.log("Paths -> blog",paths);
//     }
//     return {
//       paths,
//     fallback:false,
//   }
// }

export default BlogPage;