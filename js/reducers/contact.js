import {
  REQUEST_POSTS_CONTACT,
  RECEIVE_POSTS_CONTACT
} from '../actions';

const initSections = [
  {key: "亲友", data: []},
  {key: "病友", data: []}
];

function getContactList(state = {sections: initSections}, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return state;
    case RECEIVE_POSTS:
      return action.data;
      break;
    default:
      return state;
  }
}

export default getContactList;
