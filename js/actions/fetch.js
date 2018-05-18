"use strict";

const REQUEST_POSTS = "REQUEST_POSTS";
const RECEIVE_POSTS = "RECEIVE_POSTS";

export const requestPosts = params => ({
  type: REQUEST_POSTS + "_" + params.type
})

export const receivePosts = (json, params) => ({
  type: RECEIVE_POSTS + "_" + params.type,
  state: json.state,
  data: json.data
})

export const fetchPosts = params => dispatch => {
  dispatch(requestPosts(params));
  return fetch(params.url)
  .then(response => response.json())
  .then(json => dispatch(receivePosts(json, params)));
}
