import React, { useState } from 'react';
import { Pressable, View, Text, StyleSheet, Alert} from "react-native";
import QuestionList from '../components/QuestionList';
import {Button, Input, CheckBox} from 'react-native-elements';
import {deleteQuestion, updateStatus, leaveQuestion} from '../data/firebase'
import * as Clipboard from 'expo-clipboard';

function MeetingLinkScreen(props, {navigation}) {
    const questionID = props.route.params.docID; 
    const uid = props.route.params.uid;
    const meetingLink = props.route.params.meetingLink; 

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF5ED' }}>
            <Pressable 
              style = {styles.joinQueueButton} onPress={() => {
                  Alert.alert('Meeting Link Copied to Clipboard', meetingLink, [
                    {text: 'OK', onPress: () => console.log('OK Pressed') },
                  ]);
                  Clipboard.setString(meetingLink);
                }}>
              <Text style={{ fontSize: 18, fontFamily: 'IBMPlexMono-SemiBold'}}>Copy Meeting Link</Text>
            </Pressable>
            <Button
                title="Leave Question" style={styles.leaveButton} onPress = {() => {leaveQuestion(questionID, uid);
                 props.navigation.navigate('Queue', {uid: uid})}}/>
        </View>
    );
      
  }


const styles = StyleSheet.create({
    joinQueueButton: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight:100,
      marginLeft:100,
      padding:10,
      backgroundColor:'#C4A484',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
    },
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
    }
  });

export default MeetingLinkScreen;

