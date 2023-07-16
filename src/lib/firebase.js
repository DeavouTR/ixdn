import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBq9vV5AJPVhToTGSyki1UOnGgnm3bnQ_o",
  authDomain: "ixdn-55edc.firebaseapp.com",
  projectId: "ixdn-55edc",
  storageBucket: "ixdn-55edc.appspot.com",
  messagingSenderId: "222951184174",
  appId: "1:222951184174:web:fbc0ca03ae38ef08cbccbf",
  measurementId: "G-EMP03Z0R43"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
