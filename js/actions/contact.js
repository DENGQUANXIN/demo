import {URLS, TYPES} from '../src/config/const';
import {fetchPosts} from './fetch';

export const REQUEST_POSTS_CONTACT = "REQUEST_POSTS_CONTACT";
export const RECEIVE_POSTS_CONTACT = "RECEIVE_POSTS_CONTACT";
export const getContactList = () => (dispatch, getState) => {
  let params = {
    type: TYPES.contact,
    url: URLS.contact
  }
  return dispatch(fetchPosts(params));
};
