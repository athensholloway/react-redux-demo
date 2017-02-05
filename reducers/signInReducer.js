import { SIGNING_IN, SIGN_IN_SUCCESSFUL, SIGN_IN_FAILED, REMEMBER_USER } from '../actions/signInActions';

const signInReducer = (state = { rememberUser: false, signInError: '', user: null, signedIn: false, signingIn: false }, action) => {
  if (action.type === SIGNING_IN) {
    const newState = { signingIn: true };
    return Object.assign({}, state, newState);
  }
  if (action.type === SIGN_IN_SUCCESSFUL) {
    const newState = { signingIn: false, signedIn: true, user: action.user };
    return Object.assign({}, state, newState);
  }
  if (action.type === SIGN_IN_FAILED) {
    const newState = { signingIn: false, signedIn: false, user: null, signInError: action.error };
    return Object.assign({}, state, newState);
  }

  if (action.type === REMEMBER_USER) {
    const newState = { rememberUser: !state.rememberUser };
    return Object.assign({}, state, newState);
  }

  return state;
};

export default signInReducer;
