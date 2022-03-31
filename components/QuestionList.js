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
                realTimeQuestions.push(doc.data());
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
                            name= {Entry.name}
                            question = {Entry.question}
                            desc= {Entry.desc}
                            status= {Entry.status}
                            time="4 minutes left"
                            privateBool= {Entry.privateBool}
                            groupMem = {[]}//{Entry.fields.privateBool.booleanValue ? ["kevin", "melanie", "kelly", "henry", "richard"] : Entry.fields.groupMem.arrayValue.values.map((element)=>element.stringValue)}
                            >
                        </Question>
                    })) : (<Text>no posts</Text>)
                }
            </ScrollView>
        </View>
    )
}


export default QuestionList;

