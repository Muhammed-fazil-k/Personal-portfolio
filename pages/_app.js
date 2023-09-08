import { AuthProvider } from "@/context/AuthContext";
import { FirebaseAuthProvider } from "@/context/FireaseAuthContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <FirebaseAuthProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </FirebaseAuthProvider>
  );
}
