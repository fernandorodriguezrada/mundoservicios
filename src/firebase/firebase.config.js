 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyANBfvlA5QHDa2tkS5uI6HryfUWs6S8glY",
   authDomain: "mundo-servicios-webpage.firebaseapp.com",
   projectId: "mundo-servicios-webpage",
   storageBucket: "mundo-servicios-webpage.appspot.com",
   messagingSenderId: "881478598118",
   appId: "1:881478598118:web:023c67429f553a15d42a27"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

export default app;