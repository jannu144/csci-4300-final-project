// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// eslint-disable-next-line
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX0aGbAu2jPXUcZIWd2hZrhW8LkndsU48",
  authDomain: "mr-bean-h.firebaseapp.com",
  projectId: "mr-bean-h",
  storageBucket: "mr-bean-h.appspot.com",
  messagingSenderId: "673441312127",
  appId: "1:673441312127:web:ae474eb2f3939d506c3e4a",
  measurementId: "G-6GHQWB69K0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);