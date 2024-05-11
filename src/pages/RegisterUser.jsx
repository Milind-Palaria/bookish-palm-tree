import React, { useState } from 'react'
import { useFirebase } from '../context/Firebase'


const RegisterUser = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const createUser = async () => {
       const result= await firebase.signUpUser(email, pass)
       console.log("SUCCESS",result);
    }
    const createUserWithGoogle = async () => {
        const result= await firebase.signInWithGoogle()
        console.log("SUCCESS",result);
     }
 
    const firebase = useFirebase();
    // console.log(firebase);
    return (
        <div className=' ml-10 mt-10'>
            <h1 className=" text-8xl">register</h1>
            <br />
            <p>email</p><input type="text" placeholder='enter email' onChange={(e) => { setEmail(e.target.value) }} value={email} />
            <br />
            <p>password</p><input type="password" placeholder='enter password' onChange={(e) => { setPass(e.target.value) }} value={pass} />
            <br />
            <button onClick={createUser}>Create User</button>
            <hr />
            <h1>OR</h1>
            <hr />
            <button onClick={createUserWithGoogle}>Google</button>
        </div>
    )
}

export default RegisterUser