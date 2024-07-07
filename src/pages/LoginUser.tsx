import React, { useState ,useEffect} from 'react'
import { useFirebase } from '../context/Firebase'
import { useNavigate } from 'react-router-dom';


const LoginUser = () => {
    const firebase = useFirebase();
    const navigate=useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const createUser = async () => {
        const result = await firebase.signInUser(email, pass)
        //    console.log("SUCCESS");
           console.log(result)
    }
    useEffect(() => {
      if(firebase.isLoggedIn){
        navigate('/');
      }
    }, [firebase,navigate])
    
    // console.log(firebase)
    // console.log(firebase);
    return (
        <div className=' ml-10 mt-10'>
          <h1 className=" text-8xl">Login</h1>
            <p>email</p><input type="text" placeholder='enter email' onChange={(e) => { setEmail(e.target.value) }} value={email} />
            <br />
            <p>password</p><input type="password" placeholder='enter password' onChange={(e) => { setPass(e.target.value) }} value={pass} />
            <br />
            <button onClick={createUser}>Login User</button>
        </div>
    )
}

export default LoginUser