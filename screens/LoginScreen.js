import { connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert} from "react-native";
import {Button, Input, CheckBox} from 'react-native-elements';
import {auth, setInQuestionToFalse} from '../data/firebase'


function LoginScreen(props, {navigation}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onClick = async (username, password) => {
        signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
            // Signed in 
                const user = userCredential.user;
                console.log("userID:" + user.uid);
                props.navigation.navigate('Queue', {uid: user.uid})
            // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage)
                Alert.alert(errorMessage)
            });
    }

    return <View style={{ flex: 1, justifyContent: "center",alignItems: "center",}}>
                <Text>Login</Text>
                <Input placeholder='Email' onChangeText={(text) => setUsername(text)}/>
                <Input placeholder='Password' type="hidden" onChangeText={(text) => setPassword(text)}/>
                <Text> *** Need to be greater than 6 characters for the password *** </Text>

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
                    title="Login Button"
                    onPress={() => {
                        onClick(username, password);
                        setInQuestionToFalse();
                    }}
                />
            </View>
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





export default LoginScreen;