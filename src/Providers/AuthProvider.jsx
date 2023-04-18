import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
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
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // akane sign out dibo na karon firebase a sigout akata lika ahcae akane locali lika dila seta pore ar import korar cesta korba na .and akane peramiter lagbe na
    const logOut = () =>{
        return signOut(auth);
    }
    // obserb auth state changed
    useEffect(() => {
        // cheked its imported
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change', currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
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