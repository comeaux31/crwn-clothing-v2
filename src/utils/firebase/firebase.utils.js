// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBold4LCQR5wRul0r94ZIEdktH0Og1qSeA",
  authDomain: "crwn-clothing-v2-3c920.firebaseapp.com",
  projectId: "crwn-clothing-v2-3c920",
  storageBucket: "crwn-clothing-v2-3c920.appspot.com",
  messagingSenderId: "338035473690",
  appId: "1:338035473690:web:ec3cfa7c23cbfec12b00a3",
  measurementId: "G-JGCKZSDCRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);
  
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists())
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        createdAt
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }

  }
  return userDocRef
}