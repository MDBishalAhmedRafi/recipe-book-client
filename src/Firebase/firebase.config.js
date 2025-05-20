// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCeTCJTT5JN7InIq9LGH8q9hl4y1USIsQ",
  authDomain: "recipe-book-app-38172.firebaseapp.com",
  projectId: "recipe-book-app-38172",
  storageBucket: "recipe-book-app-38172.firebasestorage.app",
  messagingSenderId: "808207727723",
  appId: "1:808207727723:web:aa96c323268112693c852e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;