import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "blog-app-c10e9.firebaseapp.com",
  projectId: "blog-app-c10e9",
  storageBucket: "blog-app-c10e9.appspot.com",
  messagingSenderId: "561563947984",
  appId: "1:561563947984:web:dae793a1b5f76ef3315fd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);