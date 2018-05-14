import AppNavigator from '../pages/navigator';
const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

export default navReducer;
