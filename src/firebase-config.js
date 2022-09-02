// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0RDSkN_rW6xQ-mxNwZA7j1OePYz_RDeo",
  authDomain: "blog-2b817.firebaseapp.com",
  projectId: "blog-2b817",
  storageBucket: "blog-2b817.appspot.com",
  messagingSenderId: "482207987572",
  appId: "1:482207987572:web:8184e478bd79cc2ed11e21",
  measurementId: "G-4Z9ES4Y5GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db=getFirestore(app)
export const auth=getAuth(app)
export const provider= new GoogleAuthProvider()
