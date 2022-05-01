import React, { useState } from 'react';
import { Pressable, View, Text, StyleSheet, Alert} from "react-native";
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
          <View style={{flex:1}}/>
            <Pressable
                style = {styles.copyMeetingLink}
                onPress={() => {
                  Alert.alert('Meeting Link Copied to Clipboard', meetingLink, [
                    {text: 'OK', onPress: () => console.log('OK Pressed') },
                  ]);
                  Clipboard.setString(meetingLink);
                }}>
                <Text style={{ fontSize: 18, fontFamily: 'IBMPlexMono-SemiBold'}}>Copy Meeting Link</Text>
            </Pressable>
            <View style={{flex:1}}/>
            <Pressable
                style = {styles.doneWithQuestion}
                onPress={() => {
                  deleteQuestion(questionID)
                  props.navigation.navigate('TA Queue')
                }}>
              <Text style={{ fontSize: 18, fontFamily: 'IBMPlexMono-SemiBold'}}>Delete/ Done with Question</Text>
            </Pressable>
            <View style={{flex:1}}/>
            <Pressable
                style = {styles.setInProgress}
                onPress={() => {
                  // deleteQuestion(questionID)
                  updateStatus(questionID, "In Progress")
                  pushTokens.forEach((entry) => {
                    sendPushNotification(entry);
                  })
                  props.navigation.navigate('TA Queue')
                }}>
                <Text style={{ fontSize: 18, fontFamily: 'IBMPlexMono-SemiBold'}}>Set Status to: In Progress</Text>
            </Pressable>
            <View style={{flex:1}}/>
            <Pressable
                style = {styles.setWaiting}
                onPress={() => {
                  // deleteQuestion(questionID)
                  updateStatus(questionID, "Waiting...")
                  props.navigation.navigate('TA Queue')
                }}>
              <Text style={{ fontSize: 18, fontFamily: 'IBMPlexMono-SemiBold'}}>Revert Status to: Waiting</Text>
            </Pressable>
          <View style={{flex:1}}/>
        </View>
    );
      
  }


const styles = StyleSheet.create({
    copyMeetingLink: {
      marginRight:40,
      marginLeft:40,
      padding:10,
      backgroundColor:'#C4A484',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
    },
    doneWithQuestion: {
      marginRight:40,
      marginLeft:40,
      padding:10,
      backgroundColor:'#C4A484',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
    },
    setInProgress: {
      marginRight:40,
      marginLeft:40,
      padding:10,
      backgroundColor:'#C4A484',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
    },
    setWaiting: {
      marginRight:40,
      marginLeft:40,
      padding:10,
      backgroundColor:'#C4A484',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
    },
  });

export default TaManagementScreen;

