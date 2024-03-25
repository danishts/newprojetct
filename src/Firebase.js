
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDWSzB51ql5Sk7rP_lCYyfb22yN1gu2Q6I",
  authDomain: "table-f26e3.firebaseapp.com",
  projectId: "table-f26e3",
  storageBucket: "table-f26e3.appspot.com",
  messagingSenderId: "520115073487",
  appId: "1:520115073487:web:030fe05c5ec04c2beca2ba",
  measurementId: "G-36K72K5CXV"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);