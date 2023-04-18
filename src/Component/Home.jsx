import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2>this is home {user && <small> {user.displayName}</small>}</h2>
        </div>
    );
};

export default Home;