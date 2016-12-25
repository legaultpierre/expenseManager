'use strict';

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import {CustomButton} from './common.js';

export default class topMenu extends Component {
  render() {
    console.log('this', this)
    return (
      <View style={stylesTopMenu.container}>
        <CustomButton title="Dépense" 
                      activated={this.props.route.view === 'add'}/>
        <CustomButton title="Récapitulatif"
                      activated={this.props.route.view === 'history'}/>
      </View>
    )
  }
}

const stylesTopMenu = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
