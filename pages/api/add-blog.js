
import { db } from '@/firebase/FirebaseConfig';
import { addBlog } from '@/lib/blogs-crud';
import {collection,addDoc, Timestamp} from "firebase/firestore"

export default async function handler(req,res){
    console.log('Add blog api called');
    if(req.method === 'POST'){
        const newBlog = req.body;
        console.log(newBlog.title);
        try{
            const BlogCollection = collection(db,'blogs');
            const docRef = await addDoc(BlogCollection,{
                title:newBlog.title,
                content:newBlog.content,
                createdAt: Timestamp.fromDate(new Date())
            });
            // const addedBlog = await addBlog(newBlog);
            res.status(200).json({message:`Blog added with id ${docRef.id}`})
        } catch(err){
            console.error("Error in add api route : ",err);
        }
    }else{
        res.status(405).json({message:'Method not allowed'})
    }
}