import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user,setUser] =useState(null);
    const authInfo = { 
        user,
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