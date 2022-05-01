import React, { useState } from 'react';
import { Pressable, View, Text, StyleSheet, Alert} from "react-native";
import {Button, Input, CheckBox} from 'react-native-elements';
import {deleteQuestion, updateStatus} from '../data/firebase'
import * as Clipboard from 'expo-clipboard';
import RequestsList from './RequestsList';
import {leaveQuestion} from '../data/firebase'

function RequestsScreen(props, {navigation}) {
  const meetingLink = props.route.params.meetingLink;
  const questionID = props.route.params.docID;
  const uid = props.route.params.uid;

    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: '#FFF5ED',
        }}
      >
          <RequestsList
          // press={(docID) => {
          //       props.navigation.navigate('Join Question', {docRefID: docID})
          //   }}
            navigation = {props.navigation}
            isStudent = {true}
            uid = {props.route.params.uid} // done
            questionID = {props.route.params.docID}
          >
          </RequestsList>
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
            <Pressable
                style={styles.leaveButton} onPress = {() => {leaveQuestion(questionID, uid);
                props.navigation.navigate('Queue', {uid: uid})
              }}>
              <Text style={{ fontSize: 18, fontFamily: 'IBMPlexMono-SemiBold'}}>Leave Question</Text>
                 </Pressable>
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
    copyMeetingLink: {
      marginRight:40,
      marginLeft:40,
      marginBottom:100,
      padding:10,
      backgroundColor:'#C4A484',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
    },
    leaveButton: {
      marginRight:40,
      marginLeft:40,
      marginBottom:100,
      padding:10,
      backgroundColor:'#C4A484',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
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





export default RequestsScreen;

