import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';

export const AuthContext = createContext() ;
const UserContext = ({children}) => {
    const auth = getAuth(app)
    const [user , setUser] = useState({}) ;
    const [loading,setLoading] = useState(true)
    const [seller , setSeller] = useState({}) ;
    const [selected,setSelected] = useState(null)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const signin = (email, password) =>{
        setLoading(true)  //eta time nebe 
        return signInWithEmailAndPassword(auth , email , password);
    }

    const google=(provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged( auth , currentUser=>{

            setUser(currentUser) ;
            setLoading(false) ;
          

        })
        return ()=>{
            unsubscribe()
        }

    },[])

    const authInfo = {user ,loading, google ,signin,logOut,createUser,setSelected, selected} ;
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;