import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAhmi9rbRp4uboYlvQmMV4uPOJuU4uyEXc",
    authDomain: "tester-mili.firebaseapp.com",
    projectId: "tester-mili",
    storageBucket: "tester-mili.appspot.com",
    messagingSenderId: "746689034040",
    appId: "1:746689034040:web:c8934560fec5300e2b73cd",
    measurementId: "G-5PLGT3BCY0"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);