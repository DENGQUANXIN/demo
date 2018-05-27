"use strict";

import * as loginAction from './login';
import * as contactAction from './contact';
module.exports = {
  ...loginAction,
  ...contactAction
};
