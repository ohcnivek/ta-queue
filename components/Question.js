import React, { Component } from 'react';
import { View, StyleSheet, Alert} from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from 'react-native-elements';
import JoinQuestionScreen from '../screens/JoinQuestionScreen';

class Question extends Component {
  render() {
    return (
      <View style={[styles.og]}>
      
      <Button 
          onPress= {() => {
              if (this.props.isStudent) {
                if (this.props.uid == this.props.uidArray[0]) {
                  // student is owner of question
                  if (this.props.privateBool) {
                    // student owner's question is private
                    this.props.navigation.navigate('Meeting Link', {docID: this.props.docID, meetingLink: this.props.meetingLink})
                  } else {
                    // student owner's question is public
                    this.props.navigation.navigate('Requests Screen', {docID: this.props.docID, meetingLink: this.props.meetingLink})
                  }
                } else if (this.props.uidArray.includes(this.props.uid)) {
                  // student is a member of this question
                  this.props.navigation.navigate('Meeting Link', {docID: this.props.docID, meetingLink: this.props.meetingLink})
                } else {
                  // student is not a member of this question
                  if (this.props.status === "In Progress") {
                    // student cannot join because question is in progress
                    Alert.alert("Can't join a question that's already in progress!")
                  } else if (this.props.privateBool) {
                    Alert.alert("Can't join a private question!")
                  } else {
                    this.props.navigation.navigate('Join Question', {docID: this.props.docID, uid: this.props.uid})
                  }
                }
              // the user is a TA
              } else {
                this.props.navigation.navigate('Manage Queue', {docID: this.props.docID, pushTokens: this.props.pushTokens, meetingLink: this.props.meetingLink})
              }
            }
          }
          title={
            <CustomTitle
              name = {this.props.name} 
              question={this.props.question}
              desc={this.props.desc}
              time={this.props.time}
              status={this.props.status}
              isStudent = {this.props.isStudent}
              privateBool={this.props.privateBool}
              meetingLink={this.props.meetingLink}
              groupMem={this.props.groupMem.join(', ')}
              uidArray={this.props.uidArray}
              uid={this.props.uid}
              />
            }
          titleStyle={{ fontWeight: 'bold', fontSize: 38 }}
          buttonStyle={{
            borderWidth: 1,
            borderColor: '#904E32',
            borderRadius: 20,
            backgroundColor: this.props.status === 'Waiting...' ? '#FFF5ED': '#C4A484',
          }}
          containerStyle={{
            width: "100%",
            marginHorizontal: 0,
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
  const isStudent = props.isStudent;
  const meetingLink = props.meetingLink
  const privateBool = props.privateBool;
  const uidArray = props.uidArray
  const uid = props.uid

  const publicOrPrivate = privateBool? "private" : "public"
  if (!privateBool || !isStudent || uidArray.includes(uid)) {
    if (status !== 'Waiting...') {
      return (
        <View style= {styles.contentView}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 2}}>
              <Text style={{ fontSize: 12, fontFamily: 'IBMPlexMono-SemiBoldItalic', marginBottom: 10, color: '#904E32' }}>
                {name + ", " + groupMem}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, fontFamily: 'IBMPlexMono-SemiBoldItalic', marginBottom: 10, color: '#904E32'}}>
                {status}
              </Text>
            </View>
          </View>
          <Text style={{ fontWeight: 'bold', fontSize: 18, fontFamily: 'IBMPlexMono-Regular', marginBottom: 10, color: '#904E32'}}>{question}</Text>
            <Text style={{fontSize: 12, fontFamily: 'IBMPlexMono-SemiBoldItalic', color: '#904E32' }}>
              {desc}
            </Text>
        </View>
      );
    } else {
      return (
        <View style= {styles.contentView}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 2}}>
              <Text style={{ fontSize: 12, fontFamily: 'IBMPlexMono-SemiBoldItalic', marginBottom: 10, color: '#904E32' }}>
                {name + ", " + groupMem}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{fontSize: 12, fontFamily: 'IBMPlexMono-SemiBoldItalic', marginBottom: 10, color: '#904E32'}}> {time}</Text>
            </View>
          </View>
          <Text style={{ fontWeight: 'bold', fontSize: 18, fontFamily: 'IBMPlexMono-Regular', marginBottom: 10, color: '#904E32'}}>{question}</Text>
            <Text style={{fontSize: 12, fontFamily: 'IBMPlexMono-SemiBoldItalic', color: '#904E32' }}>
              {desc}
            </Text>
        </View>
      );
    }
  } else {
      return (
        <View>
          <Text style={{ fontSize: 20, fontFamily: 'IBMPlexMono-SemiBoldItalic', marginTop: 10, marginBottom: 10, color: '#904E32' }}>
            PRIVATE QUESTION
          </Text>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  contentView: {
    alignItems: 'flex-start',
    width: 350,
  },
  og: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});

export default Question;