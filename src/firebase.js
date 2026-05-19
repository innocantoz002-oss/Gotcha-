import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBF89lAZVPvEk25BYDC9Yw-NL_IU_4zw1c",
  authDomain: "gotcha-40fa0.firebaseapp.com",
  projectId: "gotcha-40fa0",
  storageBucket: "gotcha-40fa0.firebasestorage.app",
  messagingSenderId: "612334236632",
  appId: "1:612334236632:web:f9fe7de9d171f706e0f8ad",
  measurementId: "G-091Y46EQ8C"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);