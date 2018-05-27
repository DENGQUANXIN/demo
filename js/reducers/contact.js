import {
  REQUEST_POSTS_CONTACT,
  RECEIVE_POSTS_CONTACT
} from '../actions';
import {STATES} from '../src/config/const';

const initSections = [
  {key: "亲友", data: []},
  {key: "病友", data: []}
];

function getContactList(state = {sections: initSections, isRefreshing: false}, action) {
  switch (action.type) {
    case REQUEST_POSTS_CONTACT:
      return {
        ...state,
        isRefreshing: true
      }
    case RECEIVE_POSTS_CONTACT:
      return {
        ...state,
        sections: action.data,
        isRefreshing: false
      }
    default:
      return state;
  }
}

export default getContactList;
