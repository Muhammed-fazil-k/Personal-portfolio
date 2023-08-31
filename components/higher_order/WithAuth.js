import AuthContext from '@/context/AuthContext';
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'

const WithAuth = (Component) => {

  return function ProtectedRoute({...props}){
    const router = useRouter() ;
    const {user} = useContext(AuthContext);
    console.log('User data HOC',user);

    useEffect(()=>{
        if(!user){
            router.push('/auth/login')
        }
    },[])

    return user && <Component {...props}/>
  }
}

export default WithAuth
