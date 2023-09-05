import axios from "axios";
import { serialize } from "cookie";

export default async function handler(req, res) {
  const credential = req.body;
  try {
    const userData = await axios.post(
      "http://localhost:1337/api/auth/local",
      credential
    );
    if(userData.statusText==='OK'){
        console.log("Logged in user Data: ", userData.data);
        const cookieData = serialize('UserJwt',userData.data.jwt,{
            maxAge:60*60*24*7,
            httpOnly:true,
            path:'/',
            sameSite:'strict'
        })
        res.setHeader('Set-Cookie',cookieData);
        res.status(200).json({message:userData.data})
    }else{
        res.status(400).json({message:'Error in login: '+userData.status})
    }
  } catch (e) {
    console.error("Error in connecting to backend ",e);
    res.status(400).json({message:'Error in login route backend: '})
  }
  //check if it is valid
  // await
}
