import axios from "axios";
import { useRouter } from "next/router";

const { createContext, useState, useEffect } = require("react");

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
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
        setError("Error in network request: " + userData.data);
      }
    } catch (e) {
      setUser(null);
      setError("Error in logging from Api route", e);
      console.error("Error in logging from Api route", e);
    }
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
    <AuthContext.Provider value={{ user, error, login ,logout }}>
      {children}
    </AuthContext.Provider>
  );
***REMOVED***
