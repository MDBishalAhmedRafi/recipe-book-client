import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
                const provider = new GoogleAuthProvider()
                const [user, setUser] = useState(null);
                const [loading, setLoading] = useState(true)
                // console.log(loading, user);
                
                const createUser = (email, password) => { 
                                setLoading(true);
                                return createUserWithEmailAndPassword(auth, email, password)
                };

                const logIn = (email, password) => { 
                                setLoading(true);
                                return signInWithEmailAndPassword(auth, email, password)
                }

                const updateUser = (updatedData) => { 
                                return updateProfile(auth.currentUser, updatedData)
                }

                const googleLogIn = () => { 
                                return signInWithPopup(auth, provider)
                }

                const logOut = () => { 
                                return signOut(auth);
                }

                const forgetPass = (email) => { 
                                return sendPasswordResetEmail(auth, email)
                }

                
                useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);

    // ✅ POST user to backend when logged in
    if (currentUser?.email) {
      const userData = {
        email: currentUser.email,
        name: currentUser.displayName || 'Anonymous',
        photo: currentUser.photoURL || 'https://i.pravatar.cc/150?img=11',
      };

      fetch('https://recipe-book-app-server-sepia.vercel.app/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      }).catch((error) => console.error("Failed to save user:", error));
    }
  });

  return () => {
    unsubscribe();
  };
}, []);
                const authData = { 
                user,
                setUser,
                createUser,
                logOut,
                logIn,
                googleLogIn,
                updateUser,
                loading,
                setLoading,
                forgetPass,
                }
                return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;