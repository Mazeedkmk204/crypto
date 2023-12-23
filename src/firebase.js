

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7zhQrSgRi3EOCz28vBj3sugwYHybqTa0",
  authDomain: "cryptobase-16dbe.firebaseapp.com",
  projectId: "cryptobase-16dbe",
  storageBucket: "cryptobase-16dbe.appspot.com",
  messagingSenderId: "881204235958",
  appId: "1:881204235958:web:ac4d8a637a29463d022017",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
