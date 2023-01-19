
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCP8uMscRYyfak4s35wJsCxblktko_xjME",
  authDomain: "react-portfolio-dashboar-fd508.firebaseapp.com",
  projectId: "react-portfolio-dashboar-fd508",
  storageBucket: "react-portfolio-dashboar-fd508.appspot.com",
  messagingSenderId: "155873374339",
  appId: "1:155873374339:web:2b04ea652af41670182bb6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);