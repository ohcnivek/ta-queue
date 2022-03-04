import React, { Component } from 'react';
import {View, Text } from 'react-native';

class QueueDisplayScreen extends Component {
  render() {
    return (
      <Text>{this.props.name} </Text>
    );
  }
}

export default QueueDisplayScreen;