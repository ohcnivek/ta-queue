import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, deleteDoc, onSnapshot, collection, addDoc, updateDoc, FieldValue, arrayUnion, update, serverTimestamp } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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

console.log(EXPO_APP_API_KEY)

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const COLLECTION = "queue-questions"

async function post(desc, groupMem, name, privateBool, question, uid, status) {
    const docRef = await addDoc(collection(db, COLLECTION), {
        desc: desc,
        groupMem: groupMem,
        uidArray: [uid], 
        name: name , 
        privateBool: privateBool , 
        question: question , 
        status: status,
        timeStamp: serverTimestamp()
      });

      console.log("Success! Document written with ID: ", docRef.id);
}

async function addGroupMem(docRefID, memberToAdd, uidToAdd) {
  const docRef = doc(db, COLLECTION, docRefID); 
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    if (docSnap.data().uidArray.includes(uidToAdd)) {
      console.log("already joined this question")
      //todo: send an alert
    } else {
      const unionRes = await updateDoc(docRef, {
        groupMem: arrayUnion(memberToAdd)
      });
      const unionResUID = await updateDoc(docRef, {
        uidArray: arrayUnion(uidToAdd)
      });
    }
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  
}

async function deleteQuestion(docRefID) {
  const docRef = doc(db, COLLECTION, docRefID); 
  const deleted = await deleteDoc(docRef);
}

async function updateStatus(docRefID, status) {
  const docRef = doc(db, COLLECTION, docRefID); 
  const updated = await updateDoc(docRef, {
    status: status
  });
}

export {
   post,
    addGroupMem, 
    deleteQuestion, 
    updateStatus, 
    }