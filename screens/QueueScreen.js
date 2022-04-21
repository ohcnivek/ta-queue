import React, { useState } from 'react';
import { View, Text, StyleSheet} from "react-native";
import QuestionList from '../components/QuestionList';
import {Button, Input} from 'react-native-elements';
import {registerForPushNotificationsAsync} from '../data/notifications';


function QueueScreen(props) {
  console.log("hello")
  registerForPushNotificationsAsync();
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          <QuestionList 
          // press={(docID) => {
          //       props.navigation.navigate('Join Question', {docRefID: docID})
          //   }}
            navigation = {props.navigation}
            isStudent = {true}
            >
          </QuestionList>
          
          <Button 
              style = {styles.joinQueueButton}
              title= "Join Queue"
              onPress={() => props.navigation.navigate('Join Queue')}>
          </Button>
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





export default QueueScreen;

