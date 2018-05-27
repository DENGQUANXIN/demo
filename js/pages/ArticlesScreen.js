import React from 'react';
import {
  Text, View, TouchableOpacity,
  FlatList, StyleSheet
} from 'react-native';
import { connect } from "react-redux";

class ArticlesScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderItem = (item) => {
    var txt = item.item.title;
    var intro = item.item.introduction;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('ArticleDetail', 1)
        }}>
        <View style={styles.article}>
        <Text style={styles.articleTitle}>{txt}</Text>
        <Text style={styles.articleIntro}>{intro}</Text>
        <View></View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    var data = [
      { title: "标题1", introduction: "这是简要介绍1" },
      { title: "标题2", introduction: "这是简要介绍2" },
      { title: "标题3", introduction: "这是简要介绍3" },
      { title: "标题4", introduction: "这是简要介绍4" },
      { title: "标题5", introduction: "这是简要介绍5" },
      { title: "标题6", introduction: "这是简要介绍6" },
      { title: "标题7", introduction: "这是简要介绍7" }
    ];

    return (
      <View style={{ flex: 1, backgroundColor: "#EEEEEE" }}>
        <FlatList
          data={data}
          renderItem={this._renderItem}
          ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  article: {
    height: 100,
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    paddingTop: 5
  },
  articleTitle: {
    color: '#5C5C5C',
    fontSize: 18,
    fontWeight: "bold",
  },
  articleIntro: {
    color: '#5C5C5C',
    fontSize: 10
  }
})

export default connect()(ArticlesScreen);
