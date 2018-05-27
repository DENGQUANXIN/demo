import { combineReducers } from 'redux';
import {STATES} from '../src/config/const';
import {
  REQUEST_POSTS_LOGIN,
  RECEIVE_POSTS_LOGIN,
  LOGOUT
} from '../actions/login';

function login(state = {loginText: '登录', isLoggedIn: false, loginFailed: false, userInfo: {}}, action) {
  switch (action.type) {
    case REQUEST_POSTS_LOGIN:
      return {
        ...state,
        loginText: '登录中...'
      };
    case RECEIVE_POSTS_LOGIN:
      if(action.state == STATES.success){
        return {
          ...state,
          loginText: '登录',
          isLoggedIn: true,
          userInfo: action.data
        };
      }else {
        return {
          ...state,
          loginText: '登录',
          loginFailed: true
        };
      }
    case LOGOUT:
      return {
        ...state,
        loginText: '登录',
        isLoggedIn: false,
        loginFailed: false
      };
    default:
      return state;
  }
}

export default login;
