"use strict";

import * as loginAction from './login';
import * as homeAction from './home';
import * as contactAction from './contact';
module.exports = {
  ...loginAction,
  ...homeAction,
  ...contactAction
};
