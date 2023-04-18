import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        // logout ta call back function thai .then dia acces korbo
        logOut()
        .then(()=>{})
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className="btn btn-ghost normal-case text-xl" to="/">home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
            {
                user ?
                // jodi user take and tar vitor do ta jini dakate chacci tahole akta div er vitore a dibo
                <div>
                    <span>{user.email}</span> 
                    <button onClick={handleLogOut}  className="btn btn-xs">sign out</button>
                </div>
                : <Link to="/login">log in</Link>

            }
            </div>
        </div>
    );
};

export default Header;