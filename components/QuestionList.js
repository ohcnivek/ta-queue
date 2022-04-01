import { query, onSnapshot, collection,  deleteDoc, doc, getDoc, setDoc  } from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView} from "react-native";
import Question from './Question';
import { db } from "../data/firebase";


const QuestionList = (props) => {
    const [questions, setQuestions] = useState([]);
    const q = query(collection(db, "queue-questions"));

    useEffect( 
        () => onSnapshot(q, (querySnapshot) => {
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
        <View style= {{flexDirection: 'column', flex: 14}}>
            <ScrollView>
                {questions.length > 0 ? (questions.map(Entry => {
                        return <Question style = {{flex:2}}
                            press = {props.press}
                            name= {Entry.data.name}
                            question = {Entry.data.question}
                            desc= {Entry.data.desc}
                            status= {Entry.data.status}
                            time="4 minutes left"
                            privateBool= {Entry.data.privateBool}
                            groupMem = {Entry.data.privateBool ? [] : Entry.data.groupMem}
                            docID = {Entry.docID}
                            >
                        </Question>
                    })) : (<Text>no posts</Text>)
                }
            </ScrollView>
        </View>
    )
}


export default QuestionList;

