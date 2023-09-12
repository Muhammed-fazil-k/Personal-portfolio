import { getLocalData, saveLocalData } from "./local-data";

export default async function getAllBlogs() {
  const data = await getLocalData("blogs.json");
  return data.blogs;
}

export async function addBlog(blog) {
  console.log("add blog called");
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  try {
    const data = await getLocalData("blogs.json");
    const newBlog = {
      id: Date.now(),
      title: blog.title,
      content: blog.content,
      date: new Date().toLocaleDateString('en-US',options),
    };
    data.blogs.push(newBlog);
    await saveLocalData("blogs.json", data);
    return blog;
  } catch (err) {
    console.error("Error adding blog :", err);
    throw new Error(err);
  }
}

export async function getBlogById(id) {
  const blogs = await getAllBlogs();
  //return undefined or the object
  const blog = blogs.find((blog) => blog.id === +id);
  return blog;
}
