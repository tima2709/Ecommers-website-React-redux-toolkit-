import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyCSlJNBnSXLl0Bwttnpcpv2m-cTYjXnLbA",
    authDomain: "multimarket-b7ca5.firebaseapp.com",
    projectId: "multimarket-b7ca5",
    storageBucket: "multimarket-b7ca5.appspot.com",
    messagingSenderId: "773422015021",
    appId: "1:773422015021:web:4e17fce083897ffa0e0ea4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app