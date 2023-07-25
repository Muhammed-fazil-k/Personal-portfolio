import { getLocalData } from "./local-data";

export default async function getAllBlogs(){
    const data = await getLocalData('blogs.json') ;
    return data.blogs;
}

export async function getBlogById(id){
    const blogs = await getAllBlogs() ;
    //return undefined or the object
    const blog = blogs.find((blog) => blog.id === +id)
    return blog;
}