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

class ContactScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  propTypes: {
    sections: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.dispatch(getContactList())
  }

  _renderItem = (info) => {
    var txt = info.item.name;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('ContactDetail', 1)
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
    const { dispatch, sections } = this.props;
    console.log(sections);
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

const mapStateToProps = (state) => ({
  sections: state.contact.sections
});

export default connect(mapStateToProps)(ContactScreen);
