"use strict";

import login from './login';
import homeTest from './home';
import navReducer from './navigator';
import getContactList from './contact';

export default {
  nav: navReducer,
  login: login,
  home: homeTest,
  contact: getContactList
};
