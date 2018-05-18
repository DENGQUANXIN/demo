import {URLS, TYPES} from "../src/config/const";
import {fetchPosts} from "./fetch";

export const HOME_TEST = "HOME_TEST";
export const homeTest = _ => ({
  type: HOME_TEST
})

export const REQUEST_POSTS_TEST = "REQUEST_POSTS_TEST";
export const RECEIVE_POSTS_TEST = "RECEIVE_POSTS_TEST";
export const getJson = _ => (dispatch, getState) => {
  let params = {
    type: TYPES.test,
    url: URLS.test
  }
  return dispatch(fetchPosts(params));
}
