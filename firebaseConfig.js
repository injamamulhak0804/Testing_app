// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoKDkTTWSdLs0WgZZOegVgjT2sgu2RIPQ",
  authDomain: "food-e054f.firebaseapp.com",
  databaseURL: "https://food-e054f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "food-e054f",
  storageBucket: "food-e054f.appspot.com",
  messagingSenderId: "282277361921",
  appId: "1:282277361921:web:ad82ad31414c546ed08300",
  measurementId: "G-P5JBN59GQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
export {db};
export default app;

