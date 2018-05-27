import React from 'react';
import {
  Text, View,
  SectionList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getContactList } from '../actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class ContactScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  propTypes: {
    sections: PropTypes.string.isRequired,
    isRefreshing: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.dispatch(getContactList())
  }

  _renderItem = (info) => {
    var txt = info.item.name;
    var isStar = info.item.isStar;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('ContactDetail', {info: info.item})
        }}>
        <View style={styles.itemContainer}>
          <Text style={styles.listText}>{txt}</Text>
          {isStar ? <Icon style={styles.star} name="star" size={30} color="#009999" /> : undefined}
        </View>
      </TouchableOpacity>
    );
  }

  _sectionComp = (info) => {
    var txt = info.section.key;
    return (
      <View style={{flex: 1, flexDirection: "row", justifyContent: "center", backgroundColor: "#009999"}}>
      <Text style={styles.listTitle}>
        {txt}
      </Text>
      <TouchableOpacity style={{justifyContent: "center"}}>
        <Icon name="account-plus" size={30} color="#ffffff" />
      </TouchableOpacity>
    </View>
    );
  }

  render() {
    const { dispatch, sections, isRefreshing } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "#EEEEEE" }}>
        <SectionList
          renderSectionHeader={this._sectionComp}
          renderItem={this._renderItem}
          sections={sections}
          refreshing={isRefreshing}
          onRefresh={() => {
            dispatch(getContactList());
          }}
          ItemSeparatorComponent={() => <View><Text></Text></View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#ffffff"
  },
  listText: {
    flex: 6,
    height: 60,
    textAlignVertical: 'center',
    color: '#5C5C5C',
    fontSize: 18,
    paddingLeft: 20,
  },
  star: {
    flex: 1
  },
  listTitle: {
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 30,
    marginRight: 20
  }
})

const mapStateToProps = (state) => ({
  sections: state.contact.sections,
  isRefreshing: state.contact.isRefreshing
});

export default connect(mapStateToProps)(ContactScreen);
