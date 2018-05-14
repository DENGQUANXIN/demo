import {
  HOME_TEST,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions';

function homeTest(state = {homeText: '没有按按钮', jsonText: '无json内容'}, action) {
  switch (action.type) {
    case HOME_TEST:
      return {
        ...state,
        homeText: '按了按钮'};
    case REQUEST_POSTS:
      return {
        ...state,
        jsonText: 'loading'
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        jsonText: action.jsonText
      }
    default:
      return state;
  }
}

export default homeTest;
