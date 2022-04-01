// import axios from "axios"
// import {EXPO_APP_API_KEY,EXPO_APP_COLLECTION,EXPO_APP_PROJECT } from '@env'

const firebaseLink = "https://firestore.googleapis.com/v1/projects/"+ EXPO_APP_PROJECT +"/databases/(default)/documents/"+ EXPO_APP_COLLECTION +"?key=" + EXPO_APP_API_KEY;

// async function get() {
//     return await axios.get(firebaseLink);
// }

// async function post(desc, groupMem, name, privateBool, question, status) {
//     return await axios.post(firebaseLink, 
//             { 
//                 fields: { 
//                     desc: { stringValue: desc},
//                     groupMem: {arrayValue: groupMem},
//                     name: { stringValue: name }, 
//                     privateBool: { booleanValue: privateBool }, 
//                     question: { stringValue: question }, 
//                     status: {stringValue: status},
//                     // gtid: {}
//                     // name="Kevin"
//                     // question ="How to differentiate Java exception?"
//                     // desc= "coder dude"
//                     // status="Waiting"
//                     // time="4 minutes left"
//                     // privateBool="true"
//                     // gtid: { arrayValue: []},
//                 } 
//             }
//         ).then(response => { 
//             console.log("completed post")
//             console.log(response)
//         })
//         .catch(error => { 
//             console.log("errored out in post ")
//             console.log(error); 
//         });
    
// }

// export {get, post};