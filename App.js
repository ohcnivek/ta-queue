import React, { useState } from 'react';
import { View, Text, StyleSheet} from "react-native";
import Question from "./components/Question";
import QuestionList from "./components/QuestionList";
import {Button, Input} from 'react-native-elements';
//import { createStackNavigator, createAppContainer } from 'react-navigation';  
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TAorStudentScreen from './screens/TAorStudentScreen';
import TAQueueScreen from './screens/TAQueueScreen';
import QueueScreen from './screens/QueueScreen';
import JoinQueueScreen from './screens/JoinQueueScreen';
import JoinQuestionScreen from './screens/JoinQuestionScreen';
import TaManagementScreen from './screens/TaManagementScreen';

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TAorStudentScreen} />
        <Stack.Screen name="TA Queue" component={TAQueueScreen} />
        <Stack.Screen name="Queue" component={QueueScreen} />
        <Stack.Screen name="Join Queue" component={JoinQueueScreen} />
        <Stack.Screen name="Join Question" component={JoinQuestionScreen}/>
        <Stack.Screen name="Manage Queue" component={TaManagementScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
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
