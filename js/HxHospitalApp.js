"use strict";

import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers } from "react-navigation";
import { increase, decrease } from './actions';
import LoginScreen from './pages/LoginScreen';
import AppNavigator from './pages/navigator';

class HxHospital extends React.Component {
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
            state: this.props.nav
          })}
        />
      );
    }
  }
}

function mapStateToProps(store) {
  return {
    isLoggedIn: store.login.isLoggedIn,
    nav: store.nav
  };
}

const HxHospitalApp = connect(mapStateToProps)(HxHospital);

export default HxHospitalApp;
