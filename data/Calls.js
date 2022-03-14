import axios from "axios"
import {EXPO_APP_API_KEY,EXPO_APP_COLLECTION,EXPO_APP_PROJECT } from '@env'

const firebaseLink = "https://firestore.googleapis.com/v1/projects/"+ EXPO_APP_PROJECT +"/databases/(default)/documents/"+ EXPO_APP_COLLECTION +"?key=" + EXPO_APP_API_KEY

async function get() {
    return await axios.get(firebaseLink);
}

async function post(question, name, desc, status, time, privateBool, gtid) {
    return await axios.post(firebaseLink, 
            { 
                fields: { 
                    question: { stringValue: question }, 
                    name: { stringValue: name }, 
                    desc: { stringValue: desc},
                    status: {stringValue: status},
                    privateBool: { booleanValue: privateBool }, 
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
            console.log("hi i am in post ")
            console.log(response)
        })
        .catch(error => { 
            console.log("hi i am in post ")
            console.log(error); 
        });
    
}

export {get, post};