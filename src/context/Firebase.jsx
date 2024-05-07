import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
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

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
    return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>
}