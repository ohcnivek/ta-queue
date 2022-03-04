import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Example extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text>{this.props.name} </Text>
      <Text>{this.props.question} </Text>
      <Text>{this.props.desc} </Text>
      <Text>{this.props.status} </Text>
      <Text>{this.props.time} </Text>
      <Text>{this.props.private} </Text>
      <Boolean>{this.props.privateBool} </Boolean>
      </View>
    );
  }
}

export default Example;