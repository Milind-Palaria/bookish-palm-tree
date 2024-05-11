import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"
import { getStorage, ref, uploadBytes } from "firebase/storage"


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
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp)

export const useFirebase = () => useContext(FirebaseContext);
const googleProvider = new GoogleAuthProvider();
export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) setUser(user);
            else setUser(null);
        })

    }, [])

    const isLoggedIn = user ? true : false;

    const signUpUser = (email, password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password);
    }
    const signInUser = (email, password) => {
        signInWithEmailAndPassword(firebaseAuth, email, password)
    }

    const signInWithGoogle = () => {
        signInWithPopup(firebaseAuth, googleProvider);
    }

    console.log(user);


    const handleNewListing = async (name, isbn, price, cover) => {
        const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`)
        const uploadResult = await uploadBytes(imageRef, cover)
        return await addDoc(collection(firestore, "books"), {
            name,
            isbn,
            price,
            imageURL: uploadResult.ref.fullPath,
            userID: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        })
    }

    const listAllBooks = () => {
        return getDocs(collection(firestore, "books"));
    }

    return (
        <FirebaseContext.Provider value={{ signUpUser, 
        signInUser, 
        signInWithGoogle, 
        isLoggedIn, 
        handleNewListing,
        listAllBooks }}>

            {props.children}
        </FirebaseContext.Provider>
    )
}




