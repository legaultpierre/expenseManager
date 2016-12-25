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
    this.state = {expenseAmount: 0};
  }
  sendPress(thisContext) {
    return () => {
      console.log("Expense saved: ", thisContext.state.expenseAmount)
    };
  }
  render() {
    return (
      <View style={bottomStyles}>
        <Text>
          Saisis ici ta dépense
        </Text>
        <Picker style={{width: 100}} mode="dropdown" selectedValue={this.props.typeExpense[0]} onValueChange={(val) => console.log(val)}>
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
              onChangeText = {(text) => {console.log('ex', this.state); this.setState({expenseAmount: +text})}}
              value = {'' + this.state.expenseAmount}/>
            <Text style={{alignItems: 'center', color: 'white'}}>€</Text>
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
