import React, { useContext, useEffect, useState } from "react";
import { db } from "@/firebase/FirebaseConfig";
import {
  collection,
  addDoc,
  query,
  QuerySnapshot,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import {GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword} from 'firebase/auth'
import Button from "@/components/Button";
import FirebaseAuthContext from "@/context/FireaseAuthContext";

const FireBaseTesting = () => {
  const [userItems, setUserItems] = useState([]);

  const {firebaseSignIn,firebaseSignOut} = useContext(FirebaseAuthContext);
  //add item to database
  const addItem = async () => {
    console.log("ADding");
    await addDoc(collection(db, "users"), {
      username: "fazil",
      password: "124",
    });
  };
  //fetch data
  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsubscibe = onSnapshot(q, (sn) => {
      let itemArr = [];
      sn.forEach((item) => {
        console.log("User Item : ", item.id);
        itemArr.push({...item.data(),id:item.id});
      });
      setUserItems(itemArr);
    });
  }, []);
  
  userItems.map((user) => {
    console.log(user.username);
  });
  const signInWithGoogle = ()=>{
    console.log('logged in');
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth,provider).then(
      (result)=>{
        console.log('result : ',result);
      }
    ).catch(
      (err)=>{
        console.log('error: ',err);
      }
    )
  }

  const signInWithPassword = ()=>{
    firebaseSignIn({email:'muhammedfazil104@gmail.com',password:'blog123'})
    // const auth = getAuth();
    // signInWithEmailAndPassword(auth,"muhammedfazil104@gmail.com","blog123")
    // .then((userCredential)=>{
    //   console.log('User data :',userCredential);
    // })
    // .catch((error)=>{
    //   console.log('Error in login: ',error);
    // })

  }
  const signOut = ()=>{
    firebaseSignOut();
  }
  return (
    <div>
      <h1>Testing firebase</h1>
      <button onClick={addItem}>Add</button>
      {"hi"}

      {userItems.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.username}</p>
            <p>{user.password}</p>
          </div>
        );
      })}
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      <Button onClick={signInWithPassword}>Sign in with Email</Button>
      <Button onClick={signOut}>Sign in with Email</Button>
    </div>
  );
};

export default FireBaseTesting;
