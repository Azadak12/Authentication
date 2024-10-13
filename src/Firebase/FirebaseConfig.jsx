
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAomQy3bHEq8Dl62rDFqnoA2FgnJlEu9wk",
  authDomain: "authentication-13558.firebaseapp.com",
  databaseURL: "https://authentication-13558-default-rtdb.firebaseio.com",
  projectId: "authentication-13558",
  storageBucket: "authentication-13558.appspot.com",
  messagingSenderId: "645770246283",
  appId: "1:645770246283:web:e1a9d4638017af34b13c8e",
  measurementId: "G-PH2RDV5J7D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);