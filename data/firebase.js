import { initializeApp } from 'firebase/app';
import { getFirestore, doc, onSnapshot, collection, addDoc } from "firebase/firestore";
import {EXPO_APP_API_KEY,EXPO_APP_PROJECT } from '@env'




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
const COLLECTION = "queue-questions"

async function post(desc, groupMem, name, privateBool, question, status) {
    const docRef = await addDoc(collection(db, COLLECTION), {
        desc: desc,
        groupMem: groupMem,
        name: name , 
        privateBool: privateBool , 
        question: question , 
        status: status,
      });

      console.log("Document written with ID: ", docRef.id);
}

// post("post", [], "post kevin", true, "post question", "1 min post")