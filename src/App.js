import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from './Firebase';

const auth = getAuth(app);

function App() {

  const signUp = () => {
    createUserWithEmailAndPassword(auth, "milipili@gmail.com", "password",)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
      })
  }

  return (
    <div>
      <h1>
        Firebase Tutorial
      </h1>
      <button onClick={signUp}>Create a New User</button>
    </div>
  );
}

export default App;
