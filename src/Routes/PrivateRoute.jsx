import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    // check use context and auth context impoted two other linr .na hoi erro diba undifine
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }
    return  <Navigate to="/login" replace={true}></Navigate>;

};

export default PrivateRoute;