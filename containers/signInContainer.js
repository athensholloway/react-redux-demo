import { connect } from 'react-redux';
import { signIn, rememberUser } from '../actions/signInActions'
import SignIn from '../components/signIn'

const mapStateToProps = (state = {}) => {
    return {
      signInError: state.signInError,
      signingIn: state.signingIn,
      rememberUser: state.rememberUser
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignInClick: credentials => dispatch(signIn(credentials)),
    onRememberUserClicked: () => dispatch(rememberUser())
  }
};

const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

export default SignInContainer
