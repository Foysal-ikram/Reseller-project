import { getAuth } from "firebase/auth";
import { createContext } from "react";
import app from "../../firebase.config";

export const AuthContext = createContext() ;
const UserContext=({children})=>{
    const auth = getAuth(app)












    const authInfo = {}

    return(
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}



