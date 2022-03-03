import React, { Component } from 'react';
import { Text } from 'react-native';

class Example extends Component {
  render() {
    return (
      <Text>{this.props.name} </Text>
    );
  }
}

export default Example;