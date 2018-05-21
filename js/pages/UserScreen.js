import React from 'react';
import {
  Text, View, TouchableOpacity,
  StyleSheet, Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import { logout } from '../actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class UserScreen extends React.Component {
  render() {
    const {dispatch} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.editIconContainer}>
            <TouchableOpacity
              onPress={() => dispatch(logout())}>
              <Icon style={styles.editIcon} name="logout" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.editIcon} name="pencil" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.editIcon} name="qrcode" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.nameText}>YeYe</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.infoName}>姓名</Text>
          <Text style={styles.infoCont}>灯泉星</Text>
          <Text style={styles.infoName}>手机号</Text>
          <Text style={styles.infoCont}>13880694409</Text>
          <Text style={styles.infoName}>年龄</Text>
          <Text style={styles.infoCont}>70</Text>
          <Text style={styles.infoName}>性别</Text>
          <Text style={styles.infoCont}>男</Text>
          <Text style={styles.infoName}>相关患病信息</Text>
          <Text style={styles.infoCont}>糖尿病, 高血压</Text>
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
    backgroundColor: "#00FFCC"
  },
  editIconContainer: {
    flex: 1,
    flexDirection: "row-reverse"
  },
  editIcon: {
    padding: 10
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

export default connect()(UserScreen);
