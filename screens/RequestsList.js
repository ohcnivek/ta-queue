import { query, onSnapshot, collection,  deleteDoc, doc, getDoc, setDoc , orderBy } from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView} from "react-native";
import { db } from "../data/firebase";
import Request from "./Request";


const RequestsList = (props, {navigation}) => {
    const questionID = props.questionID;
    console.log(questionID, "@@@@@@@@@")

    const [requests, setRequests] = useState([]);
    const q = query(collection(db, "queue-questions", questionID, "joinRequests"));
        
    useEffect( 
        () =>
            onSnapshot(q, (querySnapshot) => {
                // setRequests()
                const realTimeRequests = [];
                querySnapshot.forEach(doc => {
                    realTimeRequests.push({data: doc.data(), docID: doc.id});
                    console.log(doc.id)
                    console.log(doc.data())
                });
            setRequests(realTimeRequests);
        })

    , []); // only will call when question is empty 

    return (  
        <View style={[styles.contentView, styles.shadowProp]}>
            <ScrollView>
                {requests.length > 0 ? (requests.map(Entry => {
                        return <Request style = {{flex:2}}
                            uid = {Entry.data.uid}
                            name = {Entry.data.name}
                            reasonToJoin = {Entry.data.reasonToJoin}
                            questionID = {questionID}
                            requestID = {Entry.docID}
                            >
                        </Request>
                    })) : (<Text> No requests currently :( </Text>)
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  contentView: {
    flexDirection: 'column', 
    flex: 14
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  subHeader: {
    backgroundColor : "#FCEAD7",
    color : "white",
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  }
});

export default RequestsList;

