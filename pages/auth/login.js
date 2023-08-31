import AuthContext from "@/context/AuthContext";
import React, { useContext, useState } from "react";
import style from "../../styles/Login.module.css";
import Input from "@/components/Input";
import Button from "@/components/Button";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  async function handleLogin(e) {
    e.preventDefault();
    const credentials = { username, password ***REMOVED***
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
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
***REMOVED***

export default LoginPage;
