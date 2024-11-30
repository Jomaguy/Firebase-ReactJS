// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_5UMjhCiZDnpkWL5kl7JQ2wGJjIjZEfI",
  authDomain: "reactjsandfirebase-4193b.firebaseapp.com",
  projectId: "reactjsandfirebase-4193b",
  storageBucket: "reactjsandfirebase-4193b.appspot.com",
  messagingSenderId: "961635229082",
  appId: "1:961635229082:web:bdceb9fe47532b33ccee23",
  measurementId: "G-YDY3Q48KJY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Export initialized services
export { app, analytics, auth, db, provider };
