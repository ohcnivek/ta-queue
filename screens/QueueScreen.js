import React, { useState } from 'react';
import {Pressable, View, Text, StyleSheet} from "react-native";
import QuestionList from '../components/QuestionList';
import {Input} from 'react-native-elements';


function QueueScreen(props) {
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: '#FFF5ED',
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
          
          <Pressable 
              style = {styles.joinQueueButton} onPress={() => props.navigation.navigate('Join Queue')}>
              <Text>Join Queue</Text>
              
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
      marginRight:40,
      marginLeft:40,
      marginTop:10,
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





export default QueueScreen;

