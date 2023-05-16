import React, { createContext, useEffect, useState } from 'react';
import { getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,updateProfile,
    signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile =(name,imgUrl)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{displayName: name, photoURL: imgUrl})

    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[])

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }


    const authInfo ={
        user,
        createUser,
        loading,
        signIn,
        updateUserProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;