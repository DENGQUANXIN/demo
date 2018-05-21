import AppNavigator from '../pages/navigator';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import {LOGOUT} from '../actions';

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    switch (action.type) {
      case LOGOUT:
        newState.routes[0].index = 1;
        return newState;
      default:
        return newState || state;
    }
};

export default navReducer;
