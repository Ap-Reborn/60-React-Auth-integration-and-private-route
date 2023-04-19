import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config'
export const AuthContext = createContext(null);
// getAuth and app do ta alada line a import hoi auto import na hole nija kore nita hoi na hoi refarence error dei
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // reload dila login dekai seta fix code nicar line
    const [loading,setLoading]=useState(true);
    const createUser = (email, password) => {
        //    creeateuserWithEmailandPasswor o getAuth er sate import hot hoi auto import na hole import kore nivo na hoi refarence error diba.
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogler = ()=>{
        return signInWithPopup(auth,googleAuthProvider);
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
            //  reload dila login deka setar fix code
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogler,
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