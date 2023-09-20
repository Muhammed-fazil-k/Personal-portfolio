import styles from "../../styles/Blogs.module.css";
import Layout from "@/components/Layout";
import { useContext, useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import FirebaseAuthContext from "@/context/FireaseAuthContext";
import { useRouter } from "next/router";
import { collection, doc, getDocs } from "firebase/firestore"; 
import { db } from "@/firebase/FirebaseConfig";
import { convertToLocalDate } from "@/utils/date-utils";
import APP_URL from "@/config";
import axios from "axios";

export async function getServerSideProps() {
  const blogs =[]
  const blogsCollection = collection(db,'blogs');
  const querySnapshot = await getDocs(blogsCollection);
  querySnapshot.forEach(doc =>{
    const blogData = doc.data();
    const createdAt = blogData.createdAt.toDate().toISOString()
    const blog = {...blogData,createdAt:createdAt,id:doc.id}
    blogs.push(blog)
  })
  return {
    props: {
      blogs,
    },
  };
}

const BlogsPage = ({ blogs }) => {
  const {firebaseUser,} = useContext(FirebaseAuthContext)
  const router = useRouter()
  console.log("Blogs: ", blogs);
  const directToCreate = ()=>{
    router.push("/blogs/create");
  }
  return (
    <Layout page="blogs">
      <div className={styles["blogs-container"]}>
        <h1>Blogs</h1>
        {firebaseUser && (
          <Button onClick={directToCreate}>New Post
          </Button>
        )}
        {blogs.length ===0 && <p> You haven&apos;t added blogs yet</p> }
        {blogs.map((blog) => {
          return (
            <Blog key={blog.id} blog={blog}/>
          );
        })}
      </div>
    </Layout>
  );
};



//content toggle feature logic
// if our content is greater than a particular value
// then only show links to toggle content.
// keep a state variable to store state of content
// get the content to display based on the above state variable

const Blog = ({ blog }) => {
  const { firebaseUser } = useContext(FirebaseAuthContext);
  const [showFullContent, setShowFullContent] = useState(false);
  const maxContentLength = 150;
  const contentToDisplay = showFullContent
    ? blog.content
    : blog.content.substr(0, maxContentLength);
  const shortContent = blog.content.length < maxContentLength;

  const formatedDate =convertToLocalDate(blog.createdAt); 
  const router = useRouter()
  const handleDelete = async ()=>{
    const url = `${APP_URL}/api/blog/delete`;
    const res = await axios.delete(url,{data:{id:blog.id}});
    console.log('delete response :',res);
    router.push('/blogs')
  }
  return (
    <div className={styles["blog-container"]}>
      <Link href={`/blogs/${blog.id}`}>
        <h2>{blog.title}</h2>
      </Link>
        <span>{formatedDate}</span>
        <p>
          {contentToDisplay} {!shortContent && '....' }
        </p>
        {firebaseUser && <Button onClick={handleDelete}>Delete</Button>}
        
    </div>
  );
};

export default BlogsPage;
