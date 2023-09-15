// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  where
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


const googleAuthProvider = new GoogleAuthProvider()
googleAuthProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleAuthProvider);
export const signInWithGoogleRedirect = () => signInWithGoogleRedirect(auth, googleAuthProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  if(!userAuth) {
    alert("User Auth Failed")
    return;
  }

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
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }

  }
  return userDocRef
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}
export const createUserDocumentFromSignUpForm = async (userAuth, additionalInfo = {}) => {
  if(!userAuth) {
    alert("User Auth Failed")
    return;
  }

  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);
  
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists())
  if(!userSnapshot.exists()) {
    const { email } = userAuth;
    const createdAt = new Date();
    const { displayName } = additionalInfo

    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }

  }
  return userDocRef
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = () => {
  signOut(auth);
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (collectionKey, objects) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  for (const key in objects) {
    console.log(key);
    const docRef = doc(collectionRef, objects[key].title.toLowerCase());
    batch.set(docRef, objects[key]);
  }
  await batch.commit();
  console.log("Done");

}

export const getCollectionAndDocuments = async () => {
const collectionRef = collection(db, 'categories');
const categoryQuery = query(collectionRef);
const querySnapshot = await getDocs(categoryQuery);
const categoryMap = querySnapshot.docs.reduce((acc, documentSnapshot) => {
  const {title, items} = documentSnapshot.data();
  acc[title.toLowerCase()] = items;
  return acc;
}, {});
return categoryMap;

}