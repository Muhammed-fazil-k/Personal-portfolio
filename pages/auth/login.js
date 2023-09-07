import AuthContext from "@/context/AuthContext";
import React, { useContext, useState } from "react";
import style from "../../styles/Login.module.css";
import Input from "@/components/Input";
import Button from "@/components/Button";
import LoadingSpinner from "@/components/LoadingSpinner";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login,loginError,isLoginLoading } = useContext(AuthContext);
  console.log(loginError);
  async function handleLogin(e) {
    e.preventDefault();
    const credentials = { username, password };
    login(credentials);
  }
  return (
    <div className={style["login-container"]}>
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
          <Button type="submit">{isLoginLoading ? <LoadingSpinner/> :'Login'}</Button>
        </div>
      </form>
      {loginError && <p style={{color:'red'}}>Login error : {loginError}</p>}
    </div>
  );
};

export default LoginPage;
