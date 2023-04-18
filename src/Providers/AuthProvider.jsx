import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const user = { displayName: "sagor nodi" };
    return (
        <div>
            <AuthContext.Provider value={user}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;