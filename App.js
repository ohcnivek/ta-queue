import { View, Text } from "react-native";
import Example from "./components/Example";
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

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Text>Universal React with Expo</Text>


    <Example name = "Kevin"></Example>
    <Example name = "Kelly"></Example>
  
    </View>
    
  );
}
