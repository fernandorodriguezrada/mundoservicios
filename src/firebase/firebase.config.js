import {
  initializeApp
}
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-hTAcLWrKSQbjdS-_9JbAywHzhdRer9k",
  authDomain: "mundo-servicios.firebaseapp.com",
  databaseURL: "https://mundo-servicios-default-rtdb.firebaseio.com",
  projectId: "mundo-servicios",
  storageBucket: "mundo-servicios.appspot.com",
  messagingSenderId: "580184560497",
  appId: "1:580184560497:web:c83cda09a0d7f15f6f5cd0",
  measurementId: "G-M538SMJQRV"
};

const app = initializeApp(firebaseConfig);

export default app;