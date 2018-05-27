"use strict";

import login from './login';
import navReducer from './navigator';
import getContactList from './contact';

export default {
  nav: navReducer,
  login: login,
  contact: getContactList
};
