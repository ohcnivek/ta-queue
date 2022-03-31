import { initializeApp } from 'firebase/app';
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import {EXPO_APP_API_KEY,EXPO_APP_COLLECTION,EXPO_APP_PROJECT } from '@env'



const firebaseConfig = {
    apiKey: EXPO_APP_API_KEY,
    authDomain: EXPO_APP_PROJECT + ".firebaseapp.com",
    projectId: EXPO_APP_PROJECT,
    storageBucket: EXPO_APP_PROJECT + "appspot.com",
    messagingSenderId: "558902082845",
    appId: "1:558902082845:web:3f229f81a887b6027ff5f4",
    measurementId: "G-PZ5WDFV2P9"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


