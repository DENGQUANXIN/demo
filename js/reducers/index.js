"use strict";

import { combineReducers } from 'redux';
import login from './login';
import homeTest from './home';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppNavigator from '../pages/navigator';

const navReducer = createNavigationReducer(AppNavigator);

export default {
  login: login,
  nav: navReducer,
  home: homeTest
};
