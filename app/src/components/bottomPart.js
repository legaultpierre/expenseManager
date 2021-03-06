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
    this.state = {expenseAmount: 0, expenseType: this.props.typeExpense[0]};
  }
  sendPress(thisContext) {
    return () => {
      console.log("Expense saved: ", thisContext.state.expenseType, thisContext.state.expenseAmount)
    };
  }
  render() {
    return (
      <View style={bottomStyles}>
        <Text style={textStyle}>
          Saisis ici ta dépense
        </Text>
        <Picker style={{width: 175}}
                mode="dropdown"
                selectedValue={this.state.expenseType}
                onValueChange={(val) => this.setState({expenseType: val})}>
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
              onChangeText = {(text) => this.setState({expenseAmount: +text})}
              value = {'' + this.state.expenseAmount}/>
            <Text style={textStyle}>€</Text>
          </View>
          <View style={{paddingTop: 20}}>
            <CustomButton activated={true} title="Envoyer !" onPress={this.sendPress(this)}/>
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

const textStyle = {
  fontSize: 20,
  alignItems: 'center',
  color: 'white'
}
