import { combineReducers } from 'redux';
import {
  LOGIN,
  LOGOUT
} from '../actions/login';

function login(state = {loginText: '登录', isLoggedIn: false}, action) {
  console.log(LOGOUT);
  switch (action.type) {
    case LOGIN:
      return {loginText: '登录中', isLoggedIn: true};
    case LOGOUT:
      return {loginText: '登录', isLoggedIn: false};
    default:
      return state;
  }
}

export default login;
