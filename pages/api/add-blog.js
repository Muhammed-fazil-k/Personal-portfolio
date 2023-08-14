
import { addBlog } from '@/lib/blogs-crud';
export default async function handler(req,res){
    console.log('Add blog api called');
    if(req.method === 'POST'){
        const newBlog = req.body;
        try{
            const addedBlog = await addBlog(newBlog);
            res.status(200).json(addedBlog)
        } catch(err){
            console.error("Error in add api route : ",err);
        }
    }else{
        res.status(405).json({message:'Method not allowed'})
    }
}