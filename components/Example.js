import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from 'react-native-elements';

class Example extends Component {
  render() {
    return (
      <View style={{
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
      }}>
      <Text>{this.props.name} </Text>
      <Text>{this.props.question}
      </Text>
      

      <Button
          title={<CustomTitle question="lsjfslkdj"/>}
          titleStyle={{ fontWeight: 'bold', fontSize: 38 }}
          buttonStyle={{
            borderWidth: 0,
            borderColor: 'transparent',
            borderRadius: 20,
          }}
          containerStyle={{
            width: "80%",
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          icon={{
            name: 'arrow-right',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          iconRight
          iconContainerStyle={{ marginLeft: 10, marginRight: 10 }}
        />

      <Text>{this.props.desc} </Text>
      <Text>{this.props.status} </Text>
      <Text>{this.props.time} </Text>
      <Text>{this.props.private} </Text>
      <Boolean>{this.props.privateBool} </Boolean>
      </View>
    );
  }
}

const CustomTitle = () => {
  return (
    <View style={{ flexDirection: 'column' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>John hidfe</Text>
      <Text style={{ fontStyle: 'italic', fontSize: 12 }}>
        Minister of Magic
      </Text>
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
    backgroundColor : "#2089dc",
    color : "white",
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  }
});

export default Example;