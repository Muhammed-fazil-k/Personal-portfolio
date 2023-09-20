
import { db } from '@/firebase/FirebaseConfig';
import { addBlog } from '@/lib/blogs-crud';
import {collection,addDoc, Timestamp, setDoc} from "firebase/firestore"

export default async function handler(req,res){
    console.log('Add blog api called');
    if(req.method === 'POST'){
        const newBlog = req.body;
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
            res.status(500).json({message:`Something went wrong while adding`})
        }
    }else{
        res.status(405).json({message:'Method not allowed'})
    }
}