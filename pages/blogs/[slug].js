import React, { useState } from "react";
import styles from '../../styles/Blogs.module.css';
import Link from "next/link";
import { db } from "@/firebase/FirebaseConfig";
import { doc,getDoc} from "firebase/firestore";
import { convertToLocalDate } from "@/utils/date-utils";
const BlogPage = ({blog}) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const maxContentLength = 400;
  const contentToDisplay = showFullContent
    ? blog.content
    : blog.content.substr(0, maxContentLength);

  function handleToggleContent() {
    setShowFullContent(!showFullContent);
  }

  const formattedDate = convertToLocalDate(blog.createdAt)
  return <div className={styles["blog-page"]}>
    {blog && <div className={styles["blog-post"]}>
      <Link href='/blogs'> ← Go back</Link>
      <h2>{blog.title}</h2>
      <span>{formattedDate}</span>
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
  const docRef= doc(db,'blogs',params.slug)
  const docSnapshot = await getDoc(docRef);
  
  let blog ={}
  if(docSnapshot.exists()){
    const blogData = docSnapshot.data();
    const createdAt = blogData.createdAt.toDate().toISOString()
    blog = {...blogData,createdAt:createdAt,id:docSnapshot.id}
  }
  return {
    props: {
            blog,
        }
    }
}


export default BlogPage;