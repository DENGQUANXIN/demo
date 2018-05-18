import React from 'react';
import {
  Text, View,
  SectionList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class ContactScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderItem = (info) => {
    var txt = info.item.name;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('ArticleDetail', 1)
        }}>
        <Text style={styles.listText}>{txt}</Text>
      </TouchableOpacity>
    );
  }

  _sectionComp = (info) => {
    var txt = info.section.key;
    return <Text style={styles.listTitle}>{txt}</Text>
  }

  render() {
    var sections = [
      { key: "亲友", data: [{ name: "表哥" }, { name: "贝贝" }, { name: "表弟" }, { name: "表姐" }, { name: "表叔" }] },
      { key: "病友", data: [{ name: "张三" }, { name: "李四" }, { name: "王五" }, { name: "李四" }, { name: "王五" }, { name: "李四" }, { name: "王五" }] }
    ];

    return (
      <View style={{ flex: 1, backgroundColor: "#EEEEEE" }}>
        <SectionList
          renderSectionHeader={this._sectionComp}
          renderItem={this._renderItem}
          sections={sections}
          ItemSeparatorComponent={() => <View><Text></Text></View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listText: {
    height: 60,
    textAlignVertical: 'center',
    backgroundColor: "#ffffff",
    color: '#5C5C5C',
    fontSize: 18,
    paddingLeft: 20,
  },
  listTitle: {
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#9CEBBC',
    color: 'white',
    fontSize: 30
  }
})

export default connect()(ContactScreen);
