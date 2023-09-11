import AuthContext from "@/context/AuthContext";
import React, { useContext, useReducer, useState } from "react";
import style from "../../styles/Login.module.css";
import Input from "@/components/Input";
import Button from "@/components/Button";
import LoadingSpinner from "@/components/LoadingSpinner";
import FirebaseAuthContext from "@/context/FireaseAuthContext";
import { useRouter } from "next/router";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login,loginError,isLoginLoading } = useContext(AuthContext);
  const {firebaseSignIn,firebaseError,firebaseLoading} = useContext(FirebaseAuthContext)
  async function handleLogin(e) {
    e.preventDefault();
    const credentials = { email:username, password };
    //login(credentials);
    firebaseSignIn(credentials)
  }
  return (
    <div className={style["login-container"]}>
      <h2>Login</h2>
      <form className={style["login-form"]} onSubmit={handleLogin}>
        <div className={style["login-input"]}>
          <label>Username</label>
          <Input
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={style["login-input"]}>
          <label>Password</label>
          <Input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={style["login-button"]}>
          <Button type="submit">{firebaseLoading ? <LoadingSpinner/> :'Login'}</Button>
        </div>
      </form>
      {firebaseError && <p style={{color:'red',fontSize:'0.9rem'}}>Login error : {firebaseError}</p>}
    </div>
  );
};

export default LoginPage;
