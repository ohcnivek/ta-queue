import React, { Component } from 'react';
import { View, StyleSheet, Alert} from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from 'react-native-elements';
import JoinQuestionScreen from './JoinQuestionScreen';
import {accept_join_request, deleteRequest} from '../data/firebase'

class Request extends Component {
  render() {
    return (
      <View style={[styles.og]}>
      <Button 
          onPress= {(props) => {
            Alert.alert("","Allow " + this.props.name + " to Join?", [
              {text: 'Accept', onPress: () => accept_join_request(this.props.questionID, this.props.uid, this.props.name, this.props.requestID) },
              {text: 'Decline', onPress: () => deleteRequest(this.props.questionID, this.props.requestID)},
              {text: 'Cancel', onPress: () => console.log('Cancel')}
            ]);
          }}
          title={
            <CustomTitle
              name = {this.props.name} 
              reasonToJoin ={this.props.reasonToJoin}
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
  const reasonToJoin = props.reasonToJoin;
  console.log(name)
  console.log(reasonToJoin)

  return (
    <View style= {{ flexDirection: 'row'}}>
      <View style={{ flex: 2, flexDirection: 'column' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: "#33333" }}>{name}</Text>
        <Text style={{ fontStyle: 'italic', fontSize: 12 }}>
          {reasonToJoin}
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
  },
  subHeader: {
    backgroundColor : "#FCEAD7",
    color : "white",
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  }
});

export default Request;