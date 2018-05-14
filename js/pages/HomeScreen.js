import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {homeTest, logout, getJson} from '../actions';

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
          onPress={() => dispatch(homeTest)}
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
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  homeText: state.home.homeText,
  jsonText: state.home.jsonText
});

export default connect(mapStateToProps)(HomeScreen);
