import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config'
export const AuthContext = createContext(null);
// getAuth and app do ta alada line a import hoi auto import na hole nija kore nita hoi na hoi refarence error dei
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        //    creeateuserWithEmailandPasswor o getAuth er sate import hot hoi auto import na hole import kore nivo na hoi refarence error diba.
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {
        user,
        createUser,
        signIn
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;