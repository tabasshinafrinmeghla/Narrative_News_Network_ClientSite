import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null);
// const auth = getAuth(app);


const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}

const logOut = () => {
  return signOut(auth);
}

const auth = getAuth(app);

const AuthProviders = ({ children }) => {

  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      console.log('login user ', loggedUser)
      setUser(loggedUser);
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const authInfo = { user, createUser, signIn, logOut }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}

    </AuthContext.Provider>
  );
};

export default AuthProviders;