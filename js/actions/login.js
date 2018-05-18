import {URLS, TYPES} from '../src/config/const';
import {fetchPosts} from './fetch';

export const REQUEST_POSTS_LOGIN = "REQUEST_POSTS_LOGIN";
export const RECEIVE_POSTS_LOGIN = "RECEIVE_POSTS_LOGIN";
export const login = (account, password) => (dispatch, getState) => {
  let params = {
    type: TYPES.login,
    url: URLS.login
  }
  return dispatch(fetchPosts(params));
}


export const LOGOUT = "LOGOUT";
export function logout() {
  return {
    type: LOGOUT
  };
}
