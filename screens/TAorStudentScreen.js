import React, { useState } from 'react';
import { View, Text, StyleSheet} from "react-native";
import {Button} from 'react-native-elements';


function TAorStudentScreen(props, {navigation}) {
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          <Text style={{ fontSize: 18 }}>Are you a student or a TA?</Text>
          
          <Button 
              buttonStyle={{
                backgroundColor: 'rgba(255, 193, 7, 1)',
                borderRadius: 5,
              }}
              titleStyle={{ color: 'black' }}
              containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 200,
                marginVertical: 10,
              }}
              title= "Student"
              onPress={() => props.navigation.navigate('Queue')}>
          </Button>

          <Button 
              buttonStyle={{
                backgroundColor: 'rgba(90, 154, 230, 1)',
                borderRadius: 5,
              }}
              containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 200,
                marginVertical: 10,
              }}
              title= "TA"
              onPress={() => props.navigation.navigate('TA Queue')}>
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





export default TAorStudentScreen;