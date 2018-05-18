"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,KeyboardAvoidingView,
  View, Text, Image,
  TextInput, StyleSheet,
  TouchableOpacity, Button
} from 'react-native';
import { connect } from 'react-redux';
import { login, LOGIN, logout } from '../actions'

const WIN_WIDTH = Dimensions.get("window").width,
  WIN_HEIGHT = Dimensions.get("window").height;

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: ''
    };
  }
  proTypes: {
    loginText: PropTypes.string.isRequired,
    loginFailed: PropTypes.boolean.isRequired
  }
  render() {
    const { dispatch, loginText } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleCont}>胸痛管家</Text>
        </View>
        <View style={styles.background}>
          <Image source={require("../src/images/heart.png")}
            style={styles.image}
            ></Image>
        </View>
        <View style={styles.input}>
          <View style={styles.aInput}>
            <TextInput
              style={styles.inputs}
              placeholder="账号"
              onChangeText={(phoneNumber) => this.setState({phoneNumber})}
              ></TextInput>
          </View>
          <View style={styles.aInput}>
            <TextInput
              style={styles.inputs}
              placeholder="密码"
              secureTextEntry
              onChangeText={(password) => this.setState({password})}
              ></TextInput>
          </View>

            {this.props.loginFailed ? <Text style={styles.failText}>登录失败，请重试!</Text> : undefined}
          <View style={styles.buttonInput}>
            <Button
              title={this.props.loginText}
              onPress={() => dispatch(login(this.state.account, this.state.password))}
              ></Button>
            <View style={styles.pressTexts}>
              <TouchableOpacity>
                <Text style={styles.pressText}>新用户注册</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.pressText}>忘记密码?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    flex: 2,
    alignItems: "center",
    flexDirection: "row"
  },
  titleCont: {
    flex: 1,
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
    textAlign: "center"
  },
  background: {
    flex: 10
  },
  image: {
    flex: 1,
    width: WIN_WIDTH,
    resizeMode:'cover'
  },
  input: {
    flex: 9
  },
  aInput: {
    flex: 1,
    alignItems: "center"
  },
  inputs: {
    width: WIN_WIDTH*0.8,
    paddingTop: 15
  },
  buttonInput: {
    flex: 3,
    width: WIN_WIDTH*0.8,
    padding: 15
  },
  pressTexts: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20
  },
  pressText: {
    color: "#0099CC",
  },
  failText: {
    width: WIN_WIDTH*0.8,
    textAlign: "center",
    color: "#FF3300"
  }
});

const mapStateToProps = (state) => ({
  loginText: state.login.loginText,
  loginFailed: state.login.loginFailed
});

export default connect(mapStateToProps)(LoginScreen);
