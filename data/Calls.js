import axios from "axios"
import {EXPO_APP_API_KEY,EXPO_APP_COLLECTION,EXPO_APP_PROJECT } from '@env'

// import { initializeApp } from 'firebase/app';

// import { getFirestore, doc, onSnapshot } from "firebase/firestore";



// const firebaseConfig = {
//     apiKey: "AIzaSyB8wMqIFUVb6mMiL7L17IoKRPBLxFacsLo",
//     authDomain: "ta-queue-99b26.firebaseapp.com",
//     projectId: "ta-queue-99b26",
//     storageBucket: "ta-queue-99b26.appspot.com",
//     messagingSenderId: "558902082845",
//     appId: "1:558902082845:web:3f229f81a887b6027ff5f4",
//     measurementId: "G-PZ5WDFV2P9"
//   };
  
// const app = initializeApp(firebaseConfig);
// export default getFirestore();


// const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
//     const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
//     console.log(source, " data: ", doc.data());
//   });




const firebaseLink = "https://firestore.googleapis.com/v1/projects/"+ EXPO_APP_PROJECT +"/databases/(default)/documents/"+ EXPO_APP_COLLECTION +"?key=" + EXPO_APP_API_KEY
// console.log(firebaseLink)


async function get() {
    return await axios.get(firebaseLink);
}

async function post(desc, groupMem, name, privateBool, question, status) {
    return await axios.post(firebaseLink, 
            { 
                fields: { 
                    desc: { stringValue: desc},
                    groupMem: {arrayValue: groupMem},
                    name: { stringValue: name }, 
                    privateBool: { booleanValue: privateBool }, 
                    question: { stringValue: question }, 
                    status: {stringValue: status},
                    // gtid: {}
                    // name="Kevin"
                    // question ="How to differentiate Java exception?"
                    // desc= "coder dude"
                    // status="Waiting"
                    // time="4 minutes left"
                    // privateBool="true"
                    // gtid: { arrayValue: []},
                } 
            }
        ).then(response => { 
            console.log("completed post")
            console.log(response)
        })
        .catch(error => { 
            console.log("errored out in post ")
            console.log(error); 
        });
    
}

export {get, post};