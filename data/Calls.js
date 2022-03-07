import axios from "axios"

async function get() {
    return await axios.get(`https://firestore.googleapis.com/v1/projects/ta-queue-99b26/databases/(default)/documents/queue-questions?key=AIzaSyB8wMqIFUVb6mMiL7L17IoKRPBLxFacsLo`);
}

async function post(question, name, desc, status, time, privateBool, gtid) {
    return await axios.post('https://firestore.googleapis.com/v1/projects/ta-queue-99b26/databases/(default)/documents/queue-questions?key=AIzaSyB8wMqIFUVb6mMiL7L17IoKRPBLxFacsLo', 
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