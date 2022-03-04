import axios from "axios"


axios.get(`https://firestore.googleapis.com/v1/projects/ta-queue-99b26/databases/(default)/documents/queue-questions?key=AIzaSyB8wMqIFUVb6mMiL7L17IoKRPBLxFacsLo`)
.then(response => { 
    console.log(response.do); 
   })
   .catch(error => { 
       console.log(error); 
   });

axios.post("https://firestore.googleapis.com/v1/projects/ta-queue-99b26/databases/(default)/documents/queue-questions?key=AIzaSyB8wMqIFUVb6mMiL7L17IoKRPBLxFacsLo", 
   { 
       fields: { 
           title: { stringValue: "testing kevin" }, 
           // category: { stringValue: this.category }, 
           // post: { stringValue: this.post }, 
           // summary: { stringValue: this.description }, 
           // published: { booleanValue: this.published }, 
           // created: { timestampValue: new Date() }, 
           // modified: { timestampValue: new Date() } 
       } 
       
   }
   ).then(res => { 
       console.log("Post created") 
   })