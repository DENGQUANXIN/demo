"use strict";

import * as loginAction from './login';
import * as homeAction from './home';
module.exports = {
  ...loginAction,
  ...homeAction
};
