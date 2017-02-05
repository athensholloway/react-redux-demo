import { SIGNING_IN, SIGN_IN_SUCCESSFUL, SIGN_IN_FAILED, REMEMBER_USER } from '../actions/signInActions'

const signInReducer = (state = {rememberUser: false, signInError: '', user: null, signedIn: false, signingIn: false}, action) => {
  if (action.type === SIGNING_IN) {
    return Object.assign({}, state, {signingIn: true});
  }
  if (action.type === SIGN_IN_SUCCESSFUL) {
    return Object.assign({}, state, {signingIn: false, signedIn: true, user: action.user});
  }
  if (action.type === SIGN_IN_FAILED) {
    return Object.assign({}, state, {signingIn: false, signedIn: false, user: null, signInError: action.error});
  }

  if (action.type === REMEMBER_USER) {
    return Object.assign({}, state, {rememberUser: !state.rememberUser});
  }

  return state;
};

export default signInReducer
