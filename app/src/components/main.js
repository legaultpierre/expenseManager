'use strict';
import React, { Component } from 'react';
import { createStore } from 'redux';
import {
  Text,
  View,
  Navigator,
  StyleSheet
} from 'react-native';

import {POSSIBLE_VIEWS, DEFAULT_VIEW} from '../constants/views.js'
import ActiveTopMenu from '../containers/activeTopMenu.js';
import BottomPart from './bottomPart.js';

export default class expanses extends Component {
  constructor(props) {
    super(props);
  }
  onForward(navigator, routes, route){    
    const nextIndex = route.index + 1 < routes.length ? route.index + 1 : route.index ;
    navigator.push(routes[nextIndex]);
  }
  // Function to call to go back to the previous scene
  onBack(navigator, route) {
    if (route.index > 0) {
      navigator.pop();
    }
  }
  render() {
    const routes = POSSIBLE_VIEWS.map((viewName,i) => ({view: viewName, index: i}))
    let _this = this
    // let currentRoute = routes.filter((route) => route.view === _this.props.view)[0]
    // console.log('rrrrr', this.props, currentRoute)
    console.log('rrrrr', routes)
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.HorizontalSwipeJump
        }
        renderScene={(route, navigator) => {
          return (
            <View style={_this.props.styles.container}>
              <ActiveTopMenu route={route}/>
              <BottomPart 
                styles={_this.props.styles} 
                route={route}
                typeExpense={_this.props.typeExpense} />
            </View>
          )
        }}
      />
    );
  }
}
