import React from 'react';
import {
  Text, View,
  StyleSheet,
  TextInput,
  Button, Picker,
  CheckBox
} from 'react-native';
import { DISEASE } from '../src/config/const';
import {connect} from 'react-redux';
import { NavigationActions } from "react-navigation";

class EditInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sexValue: "male"
    }
  }

  render() {
    const { dispatch } = this.props;
    userInfo = this.props.navigation.state.params;
    var pages = [];
    DISEASE.forEach((value, index, array) => {
      pages.push(
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox value={userInfo.disease.indexOf(index) >= 0 ? true : false}></CheckBox>
          <Text>{value}</Text>
        </View>
      );
    })

    return (
      <View style={styles.content}>
        <Text style={styles.infoName}>姓名</Text>
        <TextInput style={styles.infoCont}>{userInfo.name}</TextInput>
        <Text style={styles.infoName}>年龄</Text>
        <TextInput style={styles.infoCont}>{userInfo.age}</TextInput>
        <Text style={styles.infoName}>性别</Text>
        <Picker style={styles.infoCont}
          selectedValue={this.state.sexValue}
          onValueChange={
            (sex) => this.setState({sexValue: sex})
          }
          mode="dropdown">
          <Picker.Item label="男" value="male"/>
          <Picker.Item label="女" value="female"/>
        </Picker>
        <Text style={styles.infoName}>相关患病信息</Text>
        <View style={styles.infoCont}>
          {pages}
        </View>
        <View>
          <View style={{margin: 20}}>
            <Button title="确定修改"></Button>
          </View>
          <View style={{margin: 20, marginTop: 0}}>
            <Button
              onPress={() => dispatch(NavigationActions.back())}
              title="取消" color="#FF0000"></Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 2,
    backgroundColor: "#ffffff"
  },
  infoCont: {
    marginLeft: 20,
    marginRight: 20
  },
  infoName: {
    marginLeft: 20,
    marginTop: 18,
    fontSize: 12
  }
});


export default connect()(EditInfo);
