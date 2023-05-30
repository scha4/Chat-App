// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyWX5QxmwoRgkg5p6KgsSnhoUNM654xmU",
  authDomain: "chat-app-a4565.firebaseapp.com",
  projectId: "chat-app-a4565",
  storageBucket: "chat-app-a4565.appspot.com",
  messagingSenderId: "430008244327",
  appId: "1:430008244327:web:4715aea1e1a89ba0c41cc2",
  measurementId: "G-51GHXJKBZS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
