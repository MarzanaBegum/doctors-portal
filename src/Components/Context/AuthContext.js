import React, { createContext, useContext, useState, useEffect } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  getIdToken,
} from "../Login/Firebase/firebase.config";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");

  function signup(email, password, name) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setCurrentUser(newUser);

        // save user to the database
        fetch("https://murmuring-plains-03551.herokuapp.com/user", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => { });

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => { })
          .catch((error) => { });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setCurrentUser({});
      }
      setLoading(false);
    });
    return unsubscribed;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    token,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
