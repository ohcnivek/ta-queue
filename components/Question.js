import React, { Component } from 'react';
import { View, StyleSheet, Alert} from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from 'react-native-elements';
import JoinQuestionScreen from '../screens/JoinQuestionScreen';

class Question extends Component {
  render() {
    return (
      <View style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}>
      
      <Button
          onPress= {() => {
            if (this.props.privateBool && this.props.isStudent || this.props.status === "In Progress" && this.props.isStudent) {
              //  its private
              if (this.props.privateBool) {
                Alert.alert("Can't join a private question!")
              } else {
                Alert.alert("Can't join a question that's already in progress!")
              }
            } else {
              if (this.props.isStudent) {
                console.log(this.props.uidArray)
                if (this.props.uidArray.includes(this.props.uid)) {
                  // student owns or has already joined question
                  Alert.alert("You have joined the question!")
                  // this.props.navigate.navigate('Meeting Link', {docID: this.props.docID})
                } else {
                  //student wants to join question
                  this.props.navigation.navigate('Join Question', {docID: this.props.docID, uid: this.props.uid})
                }
              } else {
                this.props.navigation.navigate('Manage Queue', {docID: this.props.docID, meetingLink: this.props.meetingLink})
              }
            }
          }}
          title={
            <CustomTitle
              name = {this.props.name} 
              question={this.props.question}
              desc={this.props.desc}
              time={this.props.time}
              status={this.props.status}
              privateBool={this.props.privateBool}
              meetingLink={this.props.meetingLink}
              groupMem={this.props.groupMem.join(', ')}
              />
            }
          titleStyle={{ fontWeight: 'bold', fontSize: 38 }}
          buttonStyle={{
            borderWidth: 0,
            borderColor: 'transparent',
            borderRadius: 20,
            backgroundColor: this.props.status === 'Waiting...' ? '#fcead7': '#FF5733',
          }}
          containerStyle={{
            width: "90%",
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
      </View>
    );
  }
}

const CustomTitle = (props) => {
  const name = props.name;
  const question = props.question;
  const desc = props.desc;
  const time = props.time;
  const status = props.status;
  const groupMem = props.groupMem;
  const meetingLink = props.meetingLink
  const privateBool = props.privateBool;

  const publicOrPrivate = privateBool? "private" : "public"
  return (
    <View style= {{ flexDirection: 'row'}}>
      <View style={{ flex: 2, flexDirection: 'column' }}>
        <Text style={{ fontStyle: 'italic', fontSize: 12 }}>
          {name + ", " + groupMem}
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{question}</Text>
        <Text style={{ fontStyle: 'italic', fontSize: 12 }}>
          {desc}
        </Text>
      </View>


      
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{time}</Text>
        <Text style={{ fontStyle: 'italic', fontSize: 12 }}>
          {status}
          
        </Text>
        <Text style={{ fontStyle: 'italic', fontSize: 12, fontWeight: 'bold' }}>
          {publicOrPrivate}
        </Text>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
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
  subHeader: {
    backgroundColor : "#FCEAD7",
    color : "white",
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  }
});

export default Question;