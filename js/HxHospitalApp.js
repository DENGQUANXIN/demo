"use strict";

import React from 'react';
import {
  TouchableOpacity, Text,
  View, StyleSheet,
  BackHandler, ToastAndroid
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import { increase, decrease } from './actions';
import LoginScreen from './pages/LoginScreen';
import AppNavigator from './pages/navigator';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';

const addListener = createReduxBoundAddListener("root");

class HxHospital extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
       return false;
      }
      this.lastBackPressed = Date.now();
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
      return true;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    if (!this.props.isLoggedIn) {
      return (
        <LoginScreen />
      );
    } else {
      return (
        <AppNavigator
          navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
            addListener
          })}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.login.isLoggedIn,
    nav: state.nav
  };
}

const HxHospitalApp = connect(mapStateToProps)(HxHospital);

export default HxHospitalApp;
