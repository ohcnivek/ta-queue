import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  deleteDoc,
  onSnapshot,
  collection,
  addDoc,
  updateDoc,
  FieldValue,
  arrayUnion,
  update,
  serverTimestamp,
  arrayRemove,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { EXPO_APP_API_KEY, EXPO_APP_PROJECT } from "@env";
import { Alert } from "react-native";
import { pushToken } from "./notifications";

const firebaseConfig = {
  apiKey: EXPO_APP_API_KEY,
  authDomain: EXPO_APP_PROJECT + ".firebaseapp.com",
  projectId: EXPO_APP_PROJECT,
  storageBucket: EXPO_APP_PROJECT + "appspot.com",
  messagingSenderId: "558902082845",
  appId: "1:558902082845:web:3f229f81a887b6027ff5f4",
  measurementId: "G-PZ5WDFV2P9",
};

console.log(EXPO_APP_API_KEY);

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const COLLECTION = "queue-questions";
export let inQuestion = false;

export function setInQuestionToFalse() {
  inQuestion = false;
}
async function post(
  desc,
  groupMem,
  isVirtual,
  meetingLink,
  name,
  privateBool,
  question,
  uid,
  status
) {
  if (inQuestion) {
    Alert.alert("already in a question");
    return;
  }
  const docRef = await addDoc(collection(db, COLLECTION), {
    desc: desc,
    groupMem: groupMem,
    uidArray: [uid],
    isVirtual: isVirtual,
    meetingLink: meetingLink,
    name: name,
    privateBool: privateBool,
    question: question,
    status: status,
    timeStamp: serverTimestamp(),

  });
  inQuestion = true;
  console.log("Success! Document written with ID: ", docRef.id);
}

async function join_request(docRefID, uid, name, reasonToJoin) {
  if (inQuestion) {
    Alert.alert("you are already in a question");
    return;
  }
  const docRef = await addDoc(
    collection(db, COLLECTION, docRefID, "joinRequests"),
    {
      uid: uid,
      name: name,
      reasonToJoin: reasonToJoin,
    }
  );

  console.log("Success! Document written with ID: ", docRef.id);
}

async function accept_join_request(
  questionID,
  uidToAdd,
  memberToAdd,
  requestID
) {
  const docRef = doc(db, COLLECTION, questionID);
  const unionRes = await updateDoc(docRef, {
    groupMem: arrayUnion(memberToAdd),
  });
  const unionResUID = await updateDoc(docRef, {
    uidArray: arrayUnion(uidToAdd),
  });
  deleteRequest(questionID, requestID);
  console.log("Success! User request has been  ", docRef.id);
}

async function addGroupMem(docRefID, memberToAdd, uidToAdd) {
  const docRef = doc(db, COLLECTION, docRefID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    if (docSnap.data().uidArray.includes(uidToAdd)) {
      console.log("already joined this question");
      //todo: send an alert
    } else {
      const unionRes = await updateDoc(docRef, {
        groupMem: arrayUnion(memberToAdd),
      });
      const unionResUID = await updateDoc(docRef, {
        uidArray: arrayUnion(uidToAdd),
      });
      inQuestion = true;
    }
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

async function deleteRequest(questionID, requestID) {
  const docRef = doc(db, COLLECTION, questionID, "joinRequests", requestID);
  const deleted = await deleteDoc(docRef);
}

async function deleteQuestion(docRefID) {
  const docRef = doc(db, COLLECTION, docRefID);
  const deleted = await deleteDoc(docRef);
}

async function updateStatus(docRefID, status) {
  const docRef = doc(db, COLLECTION, docRefID);
  const updated = await updateDoc(docRef, {
    status: status,
  });
}

async function leaveQuestion(docRefID, uid) {
  const docRef = doc(db, COLLECTION, docRefID);
  const docSnap = await getDoc(docRef);
  //console.log(docSnap.data().uidArray.length + " this is the number")
  if (docSnap.data().uidArray[0] == uid) {
    const updated = await deleteQuestion(docRefID);
  } else {
    const updated = await updateDoc(docRef, {
      uidArray: arrayRemove(uid),
    });
  }
  inQuestion = false;
}

export {
  post,
  addGroupMem,
  deleteQuestion,
  updateStatus,
  join_request,
  accept_join_request,
  deleteRequest,
  leaveQuestion,
};
