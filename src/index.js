import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANBfvlA5QHDa2tkS5uI6HryfUWs6S8glY",
  authDomain: "mundo-servicios-webpage.firebaseapp.com",
  projectId: "mundo-servicios-webpage",
  storageBucket: "mundo-servicios-webpage.appspot.com",
  messagingSenderId: "881478598118",
  appId: "1:881478598118:web:023c67429f553a15d42a27",
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
