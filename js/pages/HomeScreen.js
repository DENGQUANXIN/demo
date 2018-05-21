import React from 'react';
import {
  Text, View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {homeTest, logout, getJson} from '../actions';
import {MapView, Marker} from 'react-native-amap3d';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WIN_WIDTH = Dimensions.get("window").width,
  WIN_HEIGHT = Dimensions.get("window").height;

class HomeScreen extends React.Component {
  propTypes: {
    homeText: PropTypes.string.isRequired,
    jsonText: PropTypes.string.isRequired
  }
  render() {
    const {dispatch, homeText} = this.props;
    return (
      <View style={styles.container}>
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
            <TouchableOpacity>
              <View style={styles.buttonContainer}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: "#ffffff"}}>紧急呼救</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.starContactContainer}>
          <Text style={{fontSize: 12, paddingBottom: 5}}>紧急呼救联系人</Text>
          <View style={styles.startContact}>
            <Text style={{fontSize: 20, color: "#000000", paddingRight: 30}}>表哥</Text>
            <TouchableOpacity>
              <Icon name="pencil" size={22} color="#000" />
            </TouchableOpacity>
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
  starContactContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  startContact: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE"
  }
})

const mapStateToProps = (state) => ({
  homeText: state.home.homeText,
  jsonText: state.home.jsonText
});

export default connect(mapStateToProps)(HomeScreen);
