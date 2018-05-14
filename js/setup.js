"use strict";

import React from 'react';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import { Text } from 'react-native';
import HxHospitalApp from './HxHospitalApp';
import LaunchScreen from './pages/LaunchScreen';

function setup(): ReactClass<{}> {
  console.disableYellowBox = true;
  console.log("DEBUG!!");

  Text.defaultProps.allowFontScaling = false;

  class Root extends React.Component {
    state: {
      isLoading: boolean,
      store: any
    };

    constructor() {
      super();
      this.state = {
        storeCreated: false,
        storeRehydrated: false,
        store: null
      }
    }

    componentDidMount() {
      configureStore(
        _ => this.setState({ storeRehydrated: true })
      ).then(
        store => this.setState({ store, storeCreated: true })
      );
    }

    render() {
      if(!this.state.storeCreated || !this.state.storeRehydrated){
        return <LaunchScreen />
      }
      return (
        <Provider store={this.state.store}>
          <HxHospitalApp />
        </Provider>
      )
    }
  }
  return <Root />;
}

export default setup;
