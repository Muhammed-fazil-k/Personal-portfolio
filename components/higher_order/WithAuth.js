import AuthContext from '@/context/AuthContext';
import FirebaseAuthContext from '@/context/FireaseAuthContext';
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'

const WithAuth = (Component) => {

  return function ProtectedRoute({...props}){
    const router = useRouter() ;
    const {user} = useContext(AuthContext);
    const {firebaseUser} = useContext(FirebaseAuthContext);

    useEffect(()=>{
        if(!firebaseUser){
            router.push('/auth/login')
        }
    },[])

    return firebaseUser && <Component {...props}/>
  }
}

export default WithAuth
