import React, { useState } from 'react';
import { Pressable, View, Text, TextInput, StyleSheet} from "react-native";
import QuestionList from '../components/QuestionList';
import {Input, CheckBox} from 'react-native-elements';
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
    const uid = props.route.params.uid; 
    return (
        <View style={{ flex: 1, backgroundColor: '#FFF5ED',}}>
            <Input style={{ fontSize: 18, fontFamily: 'IBMPlexMono-Regular'}} placeholder='Name'  onChangeText={(text) => setNameUserText(text)}/>
            <Input style={{ fontSize: 18, fontFamily: 'IBMPlexMono-Regular'}} placeholder='Question' onChangeText={(text) => setQuestionUserText(text)}/>
            <Input style={{ fontSize: 18, fontFamily: 'IBMPlexMono-Regular'}} placeholder='Description'  onChangeText={(text) => setDescriptionUserText(text)}/>

            <Text style={{ fontSize: 18, fontFamily: 'IBMPlexMono-Regular', marginLeft: 10 }}>In-Person or Virtual?</Text>
            <View style={{flexDirection: 'row', marginLeft: "1%"}}>
              <CheckBox
                title="In-Person"
                checked={checkedInPerson}
                fontFamily='IBMPlexMono-Regular'
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
                fontFamily='IBMPlexMono-Regular'
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

            <Input style={{ fontSize: 17, fontFamily: 'IBMPlexMono-Regular'}} placeholder='Meeting Link for Virtual Office Hours' onChangeText={(text) => setMeetingLinkUserText(text)}/>
            <Text style={{ fontSize: 18, fontFamily: 'IBMPlexMono-Regular', marginLeft: 10 }}>Private or Public?</Text>
            <View style={{flexDirection: 'row', marginLeft: "1%"}}>
              <CheckBox
                title="Public"
                checked={checkedPublic}
                fontFamily='IBMPlexMono-Regular'
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
                fontFamily='IBMPlexMono-Regular'
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
            
            <Pressable 
              style = {styles.joinQueueButton} onPress={() => {
                post(descriptionUserText, [], checkedVirtual, meetingLinkUserText, nameUserText, checkedPrivate, questionUserText, uid, "Waiting...");
                props.navigation.navigate('Queue', {uid: uid})
              }}>
              <Text style={{ fontSize: 18, fontFamily: 'IBMPlexMono-SemiBold'}}>Join Queue</Text>
            </Pressable>
        </View>
    );
      
  }


const styles = StyleSheet.create({
    contentView: {
      flex: 1,
    },
    joinQueueButton: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight:140,
      marginLeft:140,
      marginTop:50,
      padding:10,
      backgroundColor:'#C4A484',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
    }
  });

export default JoinQueueScreen;

