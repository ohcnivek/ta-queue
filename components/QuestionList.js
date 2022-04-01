import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView} from "react-native";
import Question from './Question';
import {get, post} from "../data/Calls"

const QuestionList = () => {
    const [questions, setQuestions] = useState([]);

    useEffect( () => { 
        async function fetchData() {
            try {
                const res = await get(); 
                console.log("in use effect")
                console.log(res);
                setQuestions(res.data.documents);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []); // only will call when question is empty 

    return (  
        <View style= {{flexDirection: 'column', flex: 14}}>
            <ScrollView>
                {questions.length > 0 ? (questions.map(Entry => {
                        return <Question style = {{flex:2}}
                            name= {Entry.fields.name.stringValue}
                            question = {Entry.fields.question.stringValue}
                            desc= {Entry.fields.desc.stringValue}
                            status= {Entry.fields.status.stringValue}
                            time="4 minutes left"
                            privateBool= {Entry.fields.privateBool.booleanValue}
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

