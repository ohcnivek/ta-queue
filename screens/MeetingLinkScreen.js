import React, { useState } from 'react';
import { Pressable, View, Text, StyleSheet, Alert} from "react-native";
import QuestionList from '../components/QuestionList';
import {Input, CheckBox} from 'react-native-elements';
import {deleteQuestion, updateStatus} from '../data/firebase'
import * as Clipboard from 'expo-clipboard';

function MeetingLinkScreen(props, {navigation}) {
    const questionID = props.route.params.docID; 
    const meetingLink = props.route.params.meetingLink; 

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Pressable 
              style = {styles.joinQueueButton} onPress={() => {
                  Alert.alert('Meeting Link Copied to Clipboard', meetingLink, [
                    {text: 'OK', onPress: () => console.log('OK Pressed') },
                  ]);
                  Clipboard.setString(meetingLink);
                }}>
              <Text style={{ fontSize: 18, fontFamily: 'IBMPlexMono-SemiBold'}}>Copy Meeting Link</Text>
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

