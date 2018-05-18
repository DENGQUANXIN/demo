import React from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {homeTest, logout, getJson} from '../actions';
import {MapView} from 'react-native-amap3d';

class HomeScreen extends React.Component {
  propTypes: {
    homeText: PropTypes.string.isRequired,
    jsonText: PropTypes.string.isRequired
  }
  render() {
    const {dispatch, homeText} = this.props;
    return (
      <View>
        <Text>{this.props.homeText}</Text>
        <TouchableOpacity
          onPress={() => dispatch(homeTest())}
          >
          <Text>press me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(logout())}
          >
          <Text>logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(getJson())}
          >
          <Text>获取json串</Text>
        </TouchableOpacity>
        <Text>{this.props.jsonText}</Text>
        <TextInput
          placeholder="密码"
          secureTextEntry
          ></TextInput>
        
      </View>
    );
  }

  goto() {
    this.refs._mapView.animateTo({
      tilt: 45,
      rotation: 90,
      zoomLevel: 18,
      coordinate: {
        latitude: 0,
        longitude: 0,
      }
    });
  }
}

styles = StyleSheet.create({
  map: {
    height: 300,
    width: "100%"
  }
})

const mapStateToProps = (state) => ({
  homeText: state.home.homeText,
  jsonText: state.home.jsonText
});

export default connect(mapStateToProps)(HomeScreen);
