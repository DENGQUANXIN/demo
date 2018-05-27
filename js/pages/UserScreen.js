import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, TouchableOpacity,
  StyleSheet, Dimensions,Button
} from 'react-native';
import {DISEASE} from '../src/config/const';
import {connect} from 'react-redux';
import { logout } from '../actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modalbox';
import Slider from 'react-native-slider';
import QRCode from 'react-native-qrcode';

class UserScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }

  propTypes: {
    userInfo: propTypes.object.isRequired
  }

  render() {
    const {userInfo, dispatch} = this.props;
    var diseaseString = "";
    if (userInfo.disease !== undefined){
      userInfo.disease.forEach((value, index, array) => {
        if(index === 0)
          diseaseString = DISEASE[value];
        else
          diseaseString = diseaseString + ', ' + DISEASE[value];
      });
    } else {
      diseaseString = "暂无";
    }

    return (
      <View style={styles.container}>
        <Modal style={styles.modal} position={"center"} ref={"modal"} isDisabled={this.state.isDisabled} backdrop={true}>
          <View style={{flexDirection: "row", width: "100%", justifyContent: "flex-end", paddingRight:10,marginTop:-20}}>
            <TouchableOpacity
            onPress={() => this.refs.modal.close()}>
              <Icon style={{backgroundColor:"red"}} name="close" size={20} color="#000000" />
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 20, color: "purple",marginBottom: 10}}>{userInfo.nickname}</Text>
          <QRCode
          value="{this.state.text}"
          size={200}
          bgColor='purple'
          fgColor='white'/>
        </Modal>
        <View style={styles.header}>
          <View style={styles.editIconContainer}>
            <View>
              <TouchableOpacity
                onPress={() => dispatch(logout())}>
                <Icon style={styles.editIcon} name="logout" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('EditInfo',userInfo)}>
                <Icon style={styles.editIcon} name="pencil" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => this.refs.modal.open()}>
                <Icon style={styles.editIcon} name="qrcode" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.nameText}>{userInfo.nickname}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.infoName}>姓名</Text>
          <Text style={styles.infoCont}>{userInfo.name}</Text>
          <Text style={styles.infoName}>手机号</Text>
          <Text style={styles.infoCont}>{userInfo.phone}</Text>
          <Text style={styles.infoName}>年龄</Text>
          <Text style={styles.infoCont}>{userInfo.age}</Text>
          <Text style={styles.infoName}>性别</Text>
          <Text style={styles.infoCont}>{userInfo.sex}</Text>
          <Text style={styles.infoName}>相关患病信息</Text>
          <Text style={styles.infoCont}>{diseaseString}</Text>
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
  },
  modal: {
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = (state) => ({
  userInfo: state.login.userInfo
})

export default connect(mapStateToProps)(UserScreen);
