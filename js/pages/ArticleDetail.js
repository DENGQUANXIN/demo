import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

class ArticleDetail extends React.Component {
  render() {
    return (
      <View>
        <Text>hello world</Text>
      </View>
    );
  }
}
export default connect()(ArticleDetail);
