import React from 'react';
import {
  Text, View,
  TextInput,
  TouchableOpacity,
  StyleSheet, Picker,
  Dimensions, Button
} from 'react-native';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {homeTest, logout, getJson} from '../actions';
import {MapView, Marker} from 'react-native-amap3d';
import Modal from 'react-native-modalbox';
import Slider from 'react-native-slider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WIN_WIDTH = Dimensions.get("window").width,
  WIN_HEIGHT = Dimensions.get("window").height;

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
      contactValue: "male"
    };
  }

  propTypes: {
    sections: PropTypes.string.isRequired
  }

  render() {
    const {dispatch, sections} = this.props;

    var pickerItems = [];
    sections[0].data.forEach((value, index, array) => {
      if (value.isStar === true)
        pickerItems.push(value);
    });

    return (
      <View style={styles.container}>
        <Modal style={styles.modal} position={"center"} ref={"modal"} isDisabled={this.state.isDisabled} backdrop={true}>
          <View style={{flexDirection: "row", width: "100%", justifyContent: "flex-end", padding:10}}>
            <TouchableOpacity
            onPress={() => this.refs.modal.close()}>
              <Icon style={{backgroundColor:"red"}} name="close" size={20} color="#000000" />
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 20, color: "red", margin: 10}}>确定进行紧急呼救？</Text>
          <View style={{margin: 10, width: 150}}>
            <Button title="确定" color="#FF0000"></Button>
          </View>
          <View style={{margin: 10, width: 150}}>
            <Button
              onPress={() => this.refs.modal.close()}
              title="取消"></Button>
          </View>
        </Modal>
        <View style={styles.mapContainer}>
          <Text style={styles.descText}>当前位置 :</Text>
          <View style={styles.map}>
          <MapView
            style={{flex: 1}}
            coordinate={{
              latitude: 39.806901,
              longitude: 116.397972,
            }}
            locationInterval={10000}
            distanceFilter={10}
            onLocation={({nativeEvent}) =>
              console.log(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)}
            zoomLevel={18}
            tilt={45}
            >
            <Marker
              active
              title='当前位置'
              color='red'
              coordinate={{
                latitude: 39.806901,
                longitude: 116.397972,
              }}
            />
          </MapView>
          </View>
        </View>
        <View style={styles.sosContainer}>
          <View style={styles.divider}></View>
          <View style={styles.sosButton}>
            <TouchableOpacity
              onPress={() => this.refs.modal.open()}
              >
              <View style={styles.buttonContainer}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: "#ffffff"}}>紧急呼救</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.selectContact}>
          <View style={styles.contactPicker}>
            <Picker style={{width: WIN_WIDTH*0.5}}
              selectedValue={this.state.contactValue}
              onValueChange={
                (phone) => this.setState({contactValue: phone})
              } >
              {pickerItems.map(
                (item,index) => <Picker.Item label={item.name} value={item.phone}/>
              )}
            </Picker>
          </View>

        </View>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  mapContainer: {
    flex: 4
  },
  descText: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: "#000000"
  },
  map: {
    flex: 10,
    borderWidth: 2,
    borderColor: "#DDDDDD",
    borderRadius: 5
  },
  sosContainer: {
    flex: 2,
    alignItems: 'center'
  },
  divider: {
    flex: 1,
    width: 0.8*WIN_WIDTH,
    borderBottomWidth: 1,
    borderColor: "#CCCCCC"
  },
  sosButton: {
    flex: 10,
    justifyContent: "center"
  },
  buttonContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF0000"
  },
  selectContact: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  contactPicker: {
    borderWidth: 2,
    borderColor: "#000"
  },
  modal: {
    height: 200,
    width: 300,
    alignItems: 'center'
  }
})

const mapStateToProps = (state) => ({
  sections: state.contact.sections
});

export default connect(mapStateToProps)(HomeScreen);
