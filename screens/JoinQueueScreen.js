import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet} from "react-native";
import QuestionList from '../components/QuestionList';
import {Button, Input, CheckBox} from 'react-native-elements';
import { post } from '../data/firebase';


function JoinQueueScreen(props, {navigation}) {
    const [checkedInPerson, toggleCheckedInPerson] = useState(false);
    const [checkedVirtual, toggleCheckedVirtual] = useState(false);
    const [checkedPrivate, toggleCheckedPrivate] = useState(false);
    const [checkedPublic, toggleCheckedPublic] = useState(false);
    const [nameUserText, setNameUserText] = useState("");
    const [questionUserText, setQuestionUserText] = useState("");
    const [descriptionUserText, setDescriptionUserText] = useState("");
    const [meetingLinkUserText, setMeetingLinkUserText] = useState("");

    return (
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <Input placeholder='Name'  onChangeText={(text) => setNameUserText(text)}/>
            <Input placeholder='Question' onChangeText={(text) => setQuestionUserText(text)}/>
            <Input placeholder='Description'  onChangeText={(text) => setDescriptionUserText(text)}/>

            <Text style={{ fontSize: 18 }}>In-Person or Virtual?</Text>
            <View style={{flexDirection: 'row', marginLeft: "1%"}}>
              <CheckBox
                title="In-Person"
                checked={checkedInPerson}
                onPress={() => {
                  if (checkedInPerson === false && checkedVirtual === false) {
                    toggleCheckedInPerson(!checkedInPerson)
                  } else {
                    toggleCheckedInPerson(!checkedInPerson)
                    toggleCheckedVirtual(!checkedVirtual)
                  }
                }}
                /> 
              <CheckBox
                title="Virtual"
                checked={checkedVirtual}
                onPress={() => {
                  if (checkedInPerson === false && checkedVirtual === false) {
                    toggleCheckedVirtual(!checkedVirtual)
                  } else {
                    toggleCheckedInPerson(!checkedInPerson)
                    toggleCheckedVirtual(!checkedVirtual)
                  }
                }}
              /> 
            </View>

            <Input placeholder='Meeting Link for Virtual Office Hours' onChangeText={(text) => setMeetingLinkUserText(text)}/>
            <Text style={{ fontSize: 18 }}>Private or Public?</Text>
            <View style={{flexDirection: 'row', marginLeft: "1%"}}>
              <CheckBox
                title="Public"
                checked={checkedPublic}
                onPress={() => {
                  if (checkedPublic === false && checkedPrivate === false) {
                    toggleCheckedPublic(!checkedPublic)
                  } else {
                    toggleCheckedPublic(!checkedPublic)
                    toggleCheckedPrivate(!checkedPrivate)
                  }
                }}
              /> 
              <CheckBox
                title="Private"
                checked={checkedPrivate}
                onPress={() => {
                  if (checkedPublic === false && checkedPrivate === false) {
                    toggleCheckedPrivate(!checkedPrivate)
                  } else {
                    toggleCheckedPublic(!checkedPublic)
                    toggleCheckedPrivate(!checkedPrivate)
                  }
                }}
              /> 
            </View>
            
            <Button
              title="Join Queue"
              onPress={() => {
                post(descriptionUserText, [], checkedVirtual, meetingLinkUserText, nameUserText, checkedPrivate, questionUserText, "Waiting...");
                props.navigation.navigate('Queue')
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





export default JoinQueueScreen;

