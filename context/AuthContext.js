import axios from "axios";
import { useRouter } from "next/router";

const { createContext, useState, useEffect } = require("react");

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loginError,setLoginError] = useState('');
  const [isLoginLoading,setIsLoginLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {

    const validateUser = async () => {
      try {
        const meUser = await axios.get("http://localhost:3000/api/auth/me");
        if(meUser.data){
            setUser(meUser.data.user)
        }else{
            setUser(null);
        }
      } catch (e) {
        setUser(null);
        setError("Unable to validate user");
      }
    ***REMOVED***
    validateUser();
  }, []);

  //login
  const login = async (credentials) => {
    setIsLoginLoading(true);
    try {
      const finalCredential = {
        identifier: credentials.username,
        password: credentials.password,
      ***REMOVED***
      const userData = await axios.post(
        "http://localhost:3000/api/auth/login-auth",
        finalCredential
      );
      console.log("Logging in provider ", userData);
      if (userData.statusText === "OK") {
        setUser(userData);
        router.push("/blogs");
      } else {
        setLoginError("Error in network request: " + userData.data);
        setTimeout(()=>setLoginError(''),3000)
      }
    } catch (e) {
      setUser(null);
      setLoginError("Error in logging from Api route", e);
      setTimeout(()=>setLoginError(''),3000)
      console.error("Error in logging from Api route", e);
    }
    setIsLoginLoading(false)
  ***REMOVED***

  //logout
  const logout = async () =>{
    try {
      const userData = await axios.post(
        "http://localhost:3000/api/auth/logout"
      );
      if (userData.statusText === "OK") {
        setUser(null);
      } else {
        setError("Error in network request ");
      }
    } catch (e) {
      setError("Something went wrong while logging out");
      console.error("Error in logging from Api route", e);
    }
  }

  return (
    <AuthContext.Provider value={{ user, error, login ,loginError,isLoginLoading,logout }}>
      {children}
    </AuthContext.Provider>
  );
***REMOVED***
