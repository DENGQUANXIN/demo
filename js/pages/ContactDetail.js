import React from 'react';
import {
  Text, View, TextInput,
  StyleSheet, Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class ContactDetail extends React.Component {
  render() {
    info = this.props.navigation.state.params.info;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.editIconContainer}>
            <Icon style={styles.editIcon} name="pencil" size={30} color="#fff" />
            {info.isStar?<Icon style={styles.editIcon} name="star" size={30} color="#fff" />:<Icon style={styles.editIcon} name="star-outline" size={30} color="#fff" />}
          </View>
          <Text style={styles.nameText}>{info.nickname}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.infoName}>手机号</Text>
          <Text style={styles.infoCont}>{info.phone}</Text>
          <Text style={styles.infoName}>关系</Text>
          <Text style={styles.infoCont}>{info.relation}</Text>
          <Text style={styles.infoName}>备注</Text>
          <Text style={styles.infoCont}>{info.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    backgroundColor: "#009999"
  },
  editIconContainer: {
    flex: 1,
    flexDirection: "row-reverse"
  },
  editIcon: {
    paddingRight: 20,
    paddingTop: 10
  },
  infoName: {
    marginLeft: 20,
    marginTop: 18,
    fontSize: 12
  },
  infoCont: {
    marginLeft: 20,
    marginTop: 5,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    color: "#000000",
    fontSize: 20
  },
  nameText: {
    position: "absolute",
    bottom: 0,
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000"
  },
  content: {
    flex: 2,
    backgroundColor: "#ffffff"
  }
});

export default connect()(ContactDetail);
