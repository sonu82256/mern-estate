// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ba94d.firebaseapp.com",
  projectId: "mern-estate-ba94d",
  storageBucket: "mern-estate-ba94d.appspot.com",
  messagingSenderId: "323897983187",
  appId: "1:323897983187:web:4f4e2d65445eb34ec21426",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
