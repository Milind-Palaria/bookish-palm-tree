import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where } from "firebase/firestore"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
// import { getMessaging } from "firebase/messaging";


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
// const messaging = getMessaging(firebaseApp);


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
    const getImageURL = (path) => {
        return getDownloadURL(ref(storage, path))
    }
    const getBookById = async (id) => {
        const docRef = doc(firestore, "books", id);
        const result = await getDoc(docRef)
        return result;
    }
    const placeOrder = async (bookId, qty) => {
        const collectionRef = collection(firestore, "books", bookId, "orders")
        const result = await addDoc(collectionRef, {
            userID: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL, 
            qty: Number(qty)
        })
        return result;
    }

    const fetchMyBooks = async (userId)=>{
        const collectionRef=collection(firestore,"books")
        const q = query(collectionRef,where("userID","==",userId))

        const result = await getDocs(q)
        return result
    }
    
    const getOrders=async(bookId)=>{
        const collectionRef=collection(firestore,"books",bookId,"orders")
        const result = await getDocs(collectionRef)
        return result
    }

    return (
        <FirebaseContext.Provider value={{
            signUpUser,
            signInUser,
            signInWithGoogle,
            isLoggedIn,
            handleNewListing,
            listAllBooks,
            getImageURL,
            getBookById,
            placeOrder,
            fetchMyBooks,
            user,
            getOrders
        }}>

            {props.children}
        </FirebaseContext.Provider>
    )
}




