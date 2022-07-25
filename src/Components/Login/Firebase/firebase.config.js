import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  getIdToken,
} from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyDk2VAv6NWDyIY8WO_Pzn8Z3nu0QaZt45g",
  authDomain: "doctors-portal-development.firebaseapp.com",
  projectId: "doctors-portal-development",
  storageBucket: "doctors-portal-development.appspot.com",
  messagingSenderId: "6828365907",
  appId: "1:6828365907:web:f6f40dbb1c685c16e58ea6",
});

export const auth = getAuth(app);
export default app;
export {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  getIdToken,
};
