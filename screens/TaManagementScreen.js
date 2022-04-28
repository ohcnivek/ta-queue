import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert} from "react-native";
import QuestionList from '../components/QuestionList';
import {Button, Input, CheckBox} from 'react-native-elements';
import {deleteQuestion, updateStatus} from '../data/firebase'
import {sendPushNotification} from '../data/notifications'
import * as Clipboard from 'expo-clipboard';


function TaManagementScreen(props, {navigation}) {
    const questionID = props.route.params.docID; 
    const meetingLink = props.route.params.meetingLink; 
    const pushTokens = props.route.params.pushTokens;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Copy Meeting Link"
                onPress={() => {
                  Alert.alert('Meeting Link Copied to Clipboard', meetingLink, [
                    {text: 'OK', onPress: () => console.log('OK Pressed') },
                  ]);
                  Clipboard.setString(meetingLink);
                }}
                style={{marginBottom: "2%"}}
            />
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
                  pushTokens.forEach((entry) => {
                    sendPushNotification(entry);
                  })
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

export default TaManagementScreen;

