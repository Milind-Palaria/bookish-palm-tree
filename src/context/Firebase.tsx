import React from "react";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  DocumentData,
  QuerySnapshot
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

interface FirebaseContextProps {
  signUpUser: (email: string, password: string) => void;
  signInUser: (email: string, password: string) => void;
  signInWithGoogle: () => void;
  isLoggedIn: boolean;
  handleNewListing: (name: string, isbn: string, price: number, cover: File) => Promise<void>;
  listAllBooks: () => Promise<QuerySnapshot<DocumentData>>;
  getImageURL: (path: string) => Promise<string>;
  getBookById: (id: string) => Promise<DocumentData>;
  placeOrder: (bookId: string, qty: number) => Promise<DocumentData>;
  fetchMyBooks: (userId: string) => Promise<QuerySnapshot<DocumentData>>;
  getOrders: (bookId: string) => Promise<QuerySnapshot<DocumentData>>;
  user: User | null;
}

const FirebaseContext = createContext<FirebaseContextProps | null>(null);

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
const storage = getStorage(firebaseApp);

export const useFirebase = (): FirebaseContextProps | null => useContext(FirebaseContext);

const googleProvider = new GoogleAuthProvider();

interface FirebaseProviderProps {
  children: ReactNode;
}

export const FirebaseProvider: React.FC<FirebaseProviderProps> = (props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const isLoggedIn = !!user;

  const signUpUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInUser = (email: string, password: string) => {
    signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider);
  };

  const handleNewListing = async (name: string, isbn: string, price: number, cover: File) => {
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
    const uploadResult = await uploadBytes(imageRef, cover);
    await addDoc(collection(firestore, "books"), {
      name,
      isbn,
      price,
      imageURL: uploadResult.ref.fullPath,
      userID: user!.uid,
      userEmail: user!.email,
      displayName: user!.displayName,
      photoURL: user!.photoURL,
    });
  };

  const listAllBooks = () => {
    return getDocs(collection(firestore, "books"));
  };

  const getImageURL = (path: string) => {
    return getDownloadURL(ref(storage, path));
  };

//   const getBookById = async (id: string) => {
//     const docRef = doc(firestore, "books", id);
//     const result = await getDoc(docRef);
//     return result.data();
//   };

const getBookById = async (id: string): Promise<DocumentData> => {
    const docRef = doc(firestore, "books", id);
    const result = await getDoc(docRef);
    if (result.exists()) {
      return result.data() as DocumentData;
    } else {
      throw new Error("Document does not exist");
    }
  };
  
  const placeOrder = async (bookId: string, qty: number) => {
    const collectionRef = collection(firestore, "books", bookId, "orders");
    const result = await addDoc(collectionRef, {
      userID: user!.uid,
      userEmail: user!.email,
      displayName: user!.displayName,
      photoURL: user!.photoURL,
      qty: Number(qty)
    });
    return result;
  };

  const fetchMyBooks = async (userId: string) => {
    const collectionRef = collection(firestore, "books");
    const q = query(collectionRef, where("userID", "==", userId));
    const result = await getDocs(q);
    return result;
  };

  const getOrders = async (bookId: string) => {
    const collectionRef = collection(firestore, "books", bookId, "orders");
    const result = await getDocs(collectionRef);
    return result;
  };

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
  );
};
