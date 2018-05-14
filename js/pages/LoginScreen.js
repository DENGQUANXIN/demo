"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { login, LOGIN, logout } from '../actions'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      password: ''
    };
  }
  proTypes: {
    loginText: PropTypes.string.isRequired
  }
  render() {
    const { dispatch, loginText } = this.props;
    return (
      <View>
        <Text style={{}}>胸痛管家</Text>
        <TextInput
          placeholder="手机号"
          autoFocus
          onChangeText={(phoneNumber) => this.setState({phoneNumber})}
        />
        <TextInput
          placeholder="密码"
          secureTextEntry
          onChangeText={(password) => this.setState({password})}
        />
        <TouchableOpacity
          onPress={() => dispatch(login(this.state.phoneNumber, this.state.password))}>
          <View>
            <Text>{this.props.loginText}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loginText: state.login.loginText
});

export default connect(mapStateToProps)(LoginScreen);
