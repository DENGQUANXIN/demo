"use strict";

import { combineReducers } from 'redux';
import login from './login';
import navReducer from './navigator';
import homeTest from './home';

export default {
  login: login,
  nav: navReducer,
  home: homeTest
};
