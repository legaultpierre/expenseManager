'use strict';

import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class CustomButton extends Component {
  render() {
    return (
      <TouchableHighlight 
          underlayColor="#C96B50"
          style={[stylesCommon.buttonContainer, {opacity: this.props.activated? 1: 0.7}]}
          onPress={this.props.onPress}>
        <Text style={{textAlign: 'center', fontSize: 20}}>
          {this.props.title}
        </Text>
      </TouchableHighlight>)
  }
}

const stylesCommon = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center', 
    width: 150, height: 35, 
    borderRadius: 15,
    backgroundColor: '#C96B50'
  }
});

export {CustomButton};
