//import React, { useState } from 'react';
import { View, Text, StyleSheet} from "react-native";
import Example from "./components/Example";
import {Button, Input} from 'react-native-elements';
//import { createStackNavigator, createAppContainer } from 'react-navigation';  
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Queue">
        <Stack.Screen name="Queue" component={QueueScreen} />
        <Stack.Screen name="Join Queue" component={JoinQueueScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function QueueScreen({ navigation }) {
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

    <View style= {{flexDirection: 'column', flex: 14}}>
      <Example style = {{flex:2}}
        name="Kevin"
        question ="How to differentiate Java exception?"
        desc= "coder dude"
        status="Waiting"
        time="4 minutes left"
        privateBool="true"
        >
      </Example>

      <Example style = {{flex:2}}
        name="Kelly"
        question ="Is there a typo in Homework 1's Question 6?"
        desc= "I saw the pdf say we should account for null but when I try to make a copy constructor, I feel there is not a way for me to account for null when trying to pass in the correct objects."
        status="Waiting"
        time="11 minutes left"
        privateBool="true"
        >
      </Example>
      </View>
      
      <Button 
        style = {styles.joinQueueButton}
        title= "Join Queue"
        onPress={() => navigation.navigate('Join Queue')}
      ></Button>
      
    </View>
  );
}

function JoinQueueScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Input placeholder='Name'/>
      <Input placeholder='Question'/>
      <Input placeholder='Description'/>
      <Button
        title="Join Queue"
        onPress={() => navigation.navigate('Queue')}
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
