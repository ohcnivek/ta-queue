import React, { useState } from 'react';
import { View, Text, StyleSheet} from "react-native";
import Question from './Question';

class QuestionList extends React.Component {  
    render() {  
        return (  
            <View style= {{flexDirection: 'column', flex: 14}}>
                <Question style = {{flex:2}}
                    name="Kevin"
                    question ="How to differentiate Java exception?"
                    desc= "coder dude"
                    status="Waiting"
                    time="4 minutes left"
                    privateBool="true"
                    >
                </Question>

                <Question style = {{flex:2}}
                    name="Kelly"
                    question ="Is there a typo in Homework 1's Question 6?"
                    desc= "I saw the pdf say we should account for null but when I try to make a copy constructor, I feel there is not a way for me to account for null when trying to pass in the correct objects."
                    status="Waiting"
                    time="11 minutes left"
                    privateBool="true"
                    >
                </Question>
            </View>
        );  
    }  
}  


export default QuestionList;

