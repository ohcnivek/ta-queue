import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
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
          onPress= {this.props.press}
          title={
            <CustomTitle
              name = {this.props.name} 
              question={this.props.question}
              desc={this.props.desc}
              time={this.props.time}
              status={this.props.status}
              groupMem={this.props.groupMem.join(', ')}
              />
            }
          titleStyle={{ fontWeight: 'bold', fontSize: 38 }}
          buttonStyle={{
            borderWidth: 0,
            borderColor: 'transparent',
            borderRadius: 20,
            backgroundColor: '#fcead7',
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