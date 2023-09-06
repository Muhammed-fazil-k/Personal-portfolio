import React, { useEffect, useState } from "react";
import { db } from "@/firebase/FirebaseConfig";
import {
  collection,
  addDoc,
  query,
  QuerySnapshot,
  getDoc,
  onSnapshot,
} from "firebase/firestore";

const FireBaseTesting = () => {
  const [userItems, setUserItems] = useState([]);
  //add item to database
  const addItem = async () => {
    console.log("ADding");
    await addDoc(collection(db, "users"), {
      username: "fazil",
      password: "124",
    });
  ***REMOVED***
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
    </div>
  );
***REMOVED***

export default FireBaseTesting;
