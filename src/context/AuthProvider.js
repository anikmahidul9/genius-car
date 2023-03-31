import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, {  createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const logIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(profile) =>{
        return updateProfile(auth.currentUser,profile);
    }
    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn = (provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }
    const logout = ()=>{
        return signOut(auth);
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe;
    }, []);
    const authInfo = {
user,
loading,
createUser,
logIn,
updateUser,
logout,
googleSignIn
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
