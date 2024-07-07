import React, { useState, useEffect, ChangeEvent } from 'react';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';

const LoginUser: React.FC = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const createUser = async () => {
        if (firebase) {
            const result = await firebase.signInUser(email, pass);
            console.log(result);
        }
    };

    useEffect(() => {
        if (firebase?.isLoggedIn) {
            navigate('/');
        }
    }, [firebase, navigate]);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePassChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value);
    };

    return (
        <div className='ml-10 mt-10'>
            <h1 className="text-8xl">Login</h1>
            <p>Email</p>
            <input type="text" placeholder='Enter email' onChange={handleEmailChange} value={email} />
            <br />
            <p>Password</p>
            <input type="password" placeholder='Enter password' onChange={handlePassChange} value={pass} />
            <br />
            <button onClick={createUser}>Login User</button>
        </div>
    );
}

export default LoginUser;
