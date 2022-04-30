import { query, onSnapshot, collection,  deleteDoc, doc, getDoc, setDoc , orderBy } from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView} from "react-native";
import Question from './Question';
import { db } from "../data/firebase";


const QuestionList = (props) => {
    const [questions, setQuestions] = useState([]);
    const q = query(collection(db, "queue-questions"), orderBy('timeStamp'));
        
    useEffect( 
        () =>
            onSnapshot(q, (querySnapshot) => {
                // setQuestions()
                const realTimeQuestions = [];
                querySnapshot.forEach(doc => {
                    realTimeQuestions.push({data: doc.data(), docID: doc.id});
                    console.log(doc.id)
                    console.log(doc.data())
                });
            setQuestions(realTimeQuestions);
        })

    , []); // only will call when question is empty 

    return (  
        <View style={[styles.contentView, styles.shadowProp]}>
            <ScrollView>
                {questions.length > 0 ? (questions.map((Entry, index) => {
                        return <Question style = {{flex:2}}
                            uid = {props.uid}
                            isStudent = {props.isStudent}
                            navigation = {props.navigation}
                            name= {Entry.data.name}
                            question = {Entry.data.question}
                            desc= {Entry.data.desc}
                            meetingLink = {Entry.data.meetingLink}
                            status= {Entry.data.status}
                            time= {index*15 + " minutes left"}
                            privateBool= {Entry.data.privateBool}
                            groupMem = {Entry.data.groupMem}
                            uidArray = {Entry.data.uidArray}
                            docID = {Entry.docID}
                            pushTokens = {Entry.data.pushTokens}
                            >
                        </Question>
                    })) : (<Text> No posts :( </Text>)
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

export default QuestionList;

