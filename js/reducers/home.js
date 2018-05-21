import {
  HOME_TEST,
  REQUEST_POSTS_TEST,
  RECEIVE_POSTS_TEST
} from '../actions';

function homeTest(state = {homeText: '没有按按钮', jsonText: '无json内容'}, action) {
  switch (action.type) {
    case HOME_TEST:
      return {
        ...state,
        homeText: '按了按钮'};
    case REQUEST_POSTS_TEST:
      return {
        ...state,
        jsonText: 'loading'
      }
    case RECEIVE_POSTS_TEST:
      return {
        ...state,
        jsonText: action.data
      }
    default:
      console.log(123);
      return state;
  }
}

export default homeTest;
