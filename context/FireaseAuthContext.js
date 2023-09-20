import {
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "@/firebase/FirebaseConfig";
import { useRouter } from "next/router";
const { createContext, useState, useEffect } = require("react");

const FirebaseAuthContext = createContext();
export default FirebaseAuthContext;

export const FirebaseAuthProvider = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [firebaseError, setFirebaseError] = useState("");
  const [firebaseLoading, setFirebaseLoading] = useState(true);
  const auth = getAuth(app);
  const router = useRouter();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
      setFirebaseLoading(false)
    });
    return () => listen();
  }, []);

  //login
  const firebaseSignIn = async (credential) => {
    console.log("firebase login called");
    setFirebaseLoading(true);
    signInWithEmailAndPassword(auth, credential.email, credential.password)
      .then((userCredential) => {
        setFirebaseUser(userCredential.user);
        router.push('/blogs')
      })
      .catch((error) => {
        console.log("Logged in error :", error.message);
        setFirebaseError(error.message);
        setTimeout(() => setFirebaseError(""), 3000);
      })
      .finally(() => {
        setFirebaseLoading(false);
      });
  };

  const firebaseSignOut = () => {
    setFirebaseLoading(true);
    signOut(auth)
      .then(() => {
        console.log("user sign out successful");
      })
      .catch((err) => {
        console.log("user sign out failed : ", err);
      })
      .finally(() => {
        setFirebaseLoading(false);
      });
  };

  return (
    <FirebaseAuthContext.Provider
      value={{
        firebaseUser,
        firebaseError,
        firebaseLoading,
        firebaseSignIn,
        firebaseSignOut,
      }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  );
};
