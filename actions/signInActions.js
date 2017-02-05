export const SIGNING_IN = 'SIGNING_IN';
function signingIn() {
  return { type: SIGNING_IN };
}

export const REMEMBER_USER = 'REMEMBER_USER';
export function rememberUser() {
  return { type: REMEMBER_USER };
}

export const SIGN_IN_SUCCESSFUL = 'SIGN_IN_SUCCESSFUL';
function signInSuccessful(user) {
  return { type: SIGN_IN_SUCCESSFUL, user };
}

export const SIGN_IN_FAILED = 'SIGN_IN_FAILED';
function signInFailed(error) {
  return { type: SIGN_IN_FAILED, error };
}

const mockSignInApi = (credentials) => {
  console.log(`signing in with username: ${credentials.username} and password: ${credentials.password}`);

  return new Promise((resolve) => {
    const user = { userId: '1', role: 'admin', username: 'athensholloway' };
    setTimeout(() => resolve(Object.assign(user, credentials)), 3000);
  });
};

// async action creator
export function signIn(credentials) {
  return (dispatch) => {
    // dispatch authenticating
    dispatch(signingIn());

    // invoke api to authenticate
    mockSignInApi(credentials)
      .then(user => dispatch(signInSuccessful(user)))
      .catch(error => dispatch(signInFailed(error)));
  };
}
