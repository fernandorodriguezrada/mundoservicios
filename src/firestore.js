import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"
document
  .getElementById("registerForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.querySelector(".name").value;
    const mail = document.querySelector(".mail").value;
    const password = document.querySelector(".password").value;

    await setDoc(doc(db, "users"), {
      name: name,
      mail: mail,
      password: password,
    });
  });