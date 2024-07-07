import React, { useState, ChangeEvent } from 'react'
import { useFirebase } from '../context/Firebase';

const RegisterUser: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const firebase = useFirebase();

    const createUser = async () => {
        if (firebase) {
            const result = await firebase.signUpUser(email, pass);
            console.log("SUCCESS", result);
        }
    };

    const createUserWithGoogle = async () => {
        if (firebase) {
            const result = await firebase.signInWithGoogle();
            console.log("SUCCESS", result);
        }
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePassChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value);
    };

    return (
        <div className='ml-10 mt-10'>
            <h1 className="text-8xl">Register</h1>
            <br />
            <p>Email</p>
            <input type="text" placeholder='Enter email' onChange={handleEmailChange} value={email} />
            <br />
            <p>Password</p>
            <input type="password" placeholder='Enter password' onChange={handlePassChange} value={pass} />
            <br />
            <button onClick={createUser}>Create User</button>
            <hr />
            <h1>OR</h1>
            <hr />
            <button onClick={createUserWithGoogle}>Google</button>
        </div>
    );
}

export default RegisterUser;
