import React, { useState } from 'react';
import { View, Text, StyleSheet} from "react-native";
import QuestionList from '../components/QuestionList';
import {Button, Input, CheckBox} from 'react-native-elements';
import {addGroupMem, join_request} from '../data/firebase'


function JoinQuestionScreen(props, {navigation}) {
    const [nameUserText, setNameUserText] = useState("");
    const [reasonToJoinText, setReasonToJoinText] = useState();
    const questionID = props.route.params.docID;
    const uid = props.route.params.uid;

    return (
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <Input placeholder='Name' onChangeText={(text) => setNameUserText(text)}/>
            <Input placeholder='Reason to join' onChangeText={(text) => setReasonToJoinText(text)}/>
            <Button
                title="Join Question"
                // onPress={() => {
                //   addGroupMem(questionID, nameUserText, uid)
                //   props.navigation.navigate('Queue', {uid: uid})
                // }}
                onPress={() => {
                  join_request(questionID, uid, nameUserText, reasonToJoinText)
                  props.navigation.navigate('Queue', {uid: uid})
                }}
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

export default JoinQuestionScreen;

