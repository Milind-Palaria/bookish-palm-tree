import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyBiYL4M3iCS575ucDO2fVkJAUGN5xs4oSk",
    authDomain: "bookish-palm-tree.firebaseapp.com",
    projectId: "bookish-palm-tree",
    storageBucket: "bookish-palm-tree.appspot.com",
    messagingSenderId: "117404108533",
    appId: "1:117404108533:web:754a8e084eac2fa4a367bc"
};

const firebaseApp = initializeApp(firebaseConfig);


const firebaseAuth = getAuth(firebaseApp);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

    const signUpUser = (email, password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password);
    }
    const signInUser = (email,password) => {
        signInWithEmailAndPassword(firebaseAuth,email,password)
    }

    return (
        <FirebaseContext.Provider value={{signUpUser,signInUser}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}