/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import app from './app/src/reducers'
import {DEFAULT_VIEW} from './app/src/constants/views'
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

// import ActiveMain from './app/src/containers/activeMain.js'
import Main from './app/src/components/main.js'

let store = createStore(app)
export default class expanses extends Component {
  render() {
    console.log('store', store.getState())
    return (
      <Provider store={store}>
        <Main styles={stylesMain} typeExpense={['Appartement', 'Courses']}/>
      </Provider>
    );
  }
}

const stylesMain = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10
  }
});

AppRegistry.registerComponent('expanses', () => expanses);
