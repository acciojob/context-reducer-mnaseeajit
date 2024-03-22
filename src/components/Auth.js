import React, { createContext } from "react";
import { useState , useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext); 

export const AuthProvider = ({children}) => {
    const[currentUser , setCurrentUser] = useState("");
    const[isAuthenticate , setIsAutyenticat] = useState(false);
    const login = (username) => {
        setIsAutyenticat(true);
        setCurrentUser(username);
    }

    const signout = () => {
         setIsAutyenticat(false);
         setCurrentUser("");
    }

    return (
        <AuthContext.Provider value={{currentUser , isAuthenticate , login , signout}}>
            {children}
        </AuthContext.Provider>
    )
}

//export default AuthProvider;