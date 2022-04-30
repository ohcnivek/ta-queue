import React, { useState } from 'react';
import { Pressable, View, Text, StyleSheet} from "react-native";
import { View, Text, StyleSheet, Alert} from "react-native";
import QuestionList from '../components/QuestionList';
import {Button, Input, CheckBox} from 'react-native-elements';
import {addGroupMem, join_request} from '../data/firebase'

function JoinQuestionScreen(props, {navigation}) {
    const [nameUserText, setNameUserText] = useState("");
    const [reasonToJoinText, setReasonToJoinText] = useState();
    const questionID = props.route.params.docID;
    const uid = props.route.params.uid;

    return (
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: '#FFF5ED' }}>

            <Input style={{ fontSize: 18, fontFamily: 'IBMPlexMono-Regular'}} placeholder='Name' onChangeText={(text) => setNameUserText(text)}/>
            <Input style={{ fontSize: 18, fontFamily: 'IBMPlexMono-Regular'}} placeholder='Reason to join' onChangeText={(text) => setReasonToJoinText(text)}/>
            
            <Pressable 
              style = {styles.joinQueueButton} 
                // onPress={() => {
                //   addGroupMem(questionID, nameUserText, uid)
                //   props.navigation.navigate('Queue', {uid: uid})
                // }}
                onPress={() => {
                  join_request(questionID, uid, nameUserText, reasonToJoinText)
                  Alert.alert('Request to join question sent!', "", [
                    {text: 'OK', onPress: () => props.navigation.navigate('Queue', {uid: uid}) },
                  ]);
                }}>
              <Text style={{ fontSize: 18, fontFamily: 'IBMPlexMono-SemiBold'}}>Join Question</Text>
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
      marginRight:120,
      marginLeft:120,
      marginTop:50,
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

export default JoinQuestionScreen;

