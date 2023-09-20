import { db } from "@/firebase/FirebaseConfig";
import { collection, deleteDoc, doc } from "firebase/firestore";

export default async function handler(req,res){
    console.log('Delete blog method called');
    if(req.method === 'DELETE'){
        const {id} = req.body;
        try{
            const idDeleted = await deleteDoc(doc(db,'blogs',id))
            res.status(200).json({message:'Blog deleted successfully'})
        }catch(err){
            console.error("Error in delete api route : ",err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    else{
        res.status(405).json({message:'Method other than delete is not all'})
    }
    console.log('Doc id :',req.body);
}