export const HOME_TEST = "HOME_TEST";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";


export const homeTest = {
  type: HOME_TEST
}

export const requestPosts = jsonName => ({
  type: REQUEST_POSTS
})

export const receivePosts = json => ({
  type: RECEIVE_POSTS,
  jsonText: json.data
})

const fetchPosts = jsonName => dispatch => {
  console.log(dispatch);
  dispatch(requestPosts(jsonName));
  return fetch('https://raw.githubusercontent.com/DENGQUANXIN/helloworld/master/test.json')
  .then(response => response.json())
  .then(json => dispatch(receivePosts(json)));
}

export const getJson = jsonName => (dispatch, getState) => {
  return dispatch(fetchPosts(jsonName));
}
