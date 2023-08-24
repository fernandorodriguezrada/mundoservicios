// const register = (e) => {
//   e.preventDefault();
//   setError("");

//   const email = document.querySelector(".mail").value;
//   const password = document.querySelector(".password").value;

//   if (validatePassword()) {
//     // Create a new user with email and password using firebase
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((res) => {
//         // User registration successful
//         console.log(res.user);

//         // Send the user to Firebase Authentication users collection
//         const user = {
//           email: res.user.email,
//           uid: res.user.uid,
//         };

//         // Add the user to the "users" collection in Firebase
//         firestore
//           .collection("users")
//           .doc(res.user.uid)
//           .set(user)
//           .then(() => {
//             console.log("User added to Firestore");
//           })
//           .catch((error) => {
//             console.error("Error adding user to Firestore: ", error);
//           });
//       })
//       .catch((err) => setError(err.message));
//   }

//   document.querySelector(".mail").value = "";
//   document.querySelector(".password").value = "";
//   document.querySelectorAll(".password")[1].value = "";
// };
