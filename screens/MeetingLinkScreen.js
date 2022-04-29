import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert} from "react-native";
import QuestionList from '../components/QuestionList';
import {Button, Input, CheckBox} from 'react-native-elements';
import {deleteQuestion, updateStatus, leaveQuestion} from '../data/firebase'
import * as Clipboard from 'expo-clipboard';

function MeetingLinkScreen(props, {navigation}) {
    const questionID = props.route.params.docID; 
    const uid = props.route.params.uid;
    const meetingLink = props.route.params.meetingLink; 

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
                //style={{marginBottom: "2%"}}
            />
            <Button
                title="Leave Question" style={styles.leaveButton} onPress = {() => {leaveQuestion(questionID, uid);
                 props.navigation.navigate('Queue', {uid: uid})}}/>
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
    leaveButton: {
      fontSize:232,
      marginLeft:40,
      marginTop:10,
      padding:10,
      color:'red',
      backgroundColor: "red",
      borderRadius:10,
      borderWidth: 1,
      borderColor: 'red'
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

