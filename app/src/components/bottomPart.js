'use strict';
import React, { Component } from 'react';
import {
  Picker,
  TextInput,
  View,
  Text,
  StyleSheet
} from 'react-native';

import {CustomButton} from './common.js';

export default class BottomPart extends Component {
  constructor(props) {
    super(props);
    this.state = {expenseAmount: '0'};
  }
  render() {
    return (
      <View style={bottomStyles}>
        <Text>
          Saisis ici ta dépense
        </Text>
        <Picker style={{width: 100}} mode="dropdown" selectedValue="java" onValueChange={(val) => console.log(val)}>
            {
              this.props.typeExpense.map((val,i) => {
                return <Picker.Item label={val} value={val} key={i}/>
              })
            }
          </Picker>
          <View style={{flexDirection: 'row', height: 40, alignItems: 'center'}}>
            <TextInput 
              style={{width: 45, textAlign: 'right', color: 'white'}}
              keyboardType = 'numeric'
              onChangeText = {(text) => this.setState({expenseAmount: text})}
              value = {this.state.expenseAmount}/>
            <Text style={{alignItems: 'center', color: 'white'}}>€</Text>
          </View>
          <View style={{paddingTop: 20}}>
            <CustomButton activated={true} title="Envoyer !"/>
          </View>
      </View>
    )
  }
}

const bottomStyles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
};
