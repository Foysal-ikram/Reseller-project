import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../firebase.config';

export const AuthContext = createContext() ;
const UserContext = ({children}) => {
    const auth = getAuth(app)
    const [user , setUser] = useState({}) ;
    const [seller , setSeller] = useState({}) ;


    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const google=(provider)=>{
        return signInWithPopup(auth, provider)
    }


    const authInfo = {user , google , createUser} ;
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;