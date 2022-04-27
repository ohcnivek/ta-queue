import React, { useState } from 'react';
import { View, Text, StyleSheet} from "react-native";
import QuestionList from '../components/QuestionList';
import {Button, Input, CheckBox} from 'react-native-elements';
import {deleteQuestion, updateStatus} from '../data/firebase'


function MeetingLinkScreen(props, {navigation}) {
    const questionID = props.route.params.docID; 
    

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Delete/ Done with Question "
                onPress={() => {
                  deleteQuestion(questionID)
                  props.navigation.navigate('TA Queue')
                }}
                style={{marginBottom: "2%"}}
            />
            <Button
                title="Set Status to: In Progress"
                onPress={() => {
                  // deleteQuestion(questionID)
                  updateStatus(questionID, "In Progress")
                  props.navigation.navigate('TA Queue')
                }}
                style={{marginBottom: "2%"}}
            />

            <Button
                title="Revert Status to: Waiting"
                onPress={() => {
                  // deleteQuestion(questionID)
                  updateStatus(questionID, "Waiting...")
                  props.navigation.navigate('TA Queue')
                }}
                style={{marginBottom: "2%"}}
            />
        </View>
    );
      
  }


const styles = StyleSheet.create({
    contentView: {
      flex: 1,
    },
    title: {
      justifyContent: "flex-end",
      alignItems: "flex-end",
      fontSize: 30,
      color: '#6b635b',
      flex: 1,
      paddingTop: 50,
      //marginTop: 100, margin is outside of block, padding is in
    },
    //this is for multiple buttons in a column
    // buttonsContainer: {
    //   flexDirection: 'row',
    //   flexWrap: 'wrap',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   width: '100%',
    //   marginVertical: 20,
    // }, 
    joinQueueButton: {
      margin: 10,
      backgroundColor: 'green',
    },
    textPrimary: {
      marginVertical: 20,
      textAlign: 'center',
      fontSize: 20,
    },
    textSecondary: {
      marginBottom: 10,
      textAlign: 'center',
      fontSize: 17,
    },
    subHeader: {
      backgroundColor : "#FCEAD7",
      color : "red",
      fontSize : 100,
      textAlign : "center",
      paddingVertical : 5,
      marginBottom : 10
    }
  });

export default MeetingLinkScreen;
