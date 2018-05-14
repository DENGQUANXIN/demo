import React from 'react';
import {Text, View} from 'react-native';
import { connect } from "react-redux";

class ContactScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>this is contact list</Text>
      </View>
    );
  }
}

export default connect()(ContactScreen);
