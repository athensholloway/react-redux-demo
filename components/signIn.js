import React, {PropTypes} from 'react'

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <div>
        <div><label htmlFor="username">Username</label>: <input type='text' id="username" onChange={(e) => this.setState({username: e.target.value})} value={this.state.username} /></div>
        <div><label htmlFor="username">Password</label>: <input type='password' id="password" onChange={(e) => this.setState({password: e.target.value})}/></div>
        <div><input type="checkbox" checked={this.state.rememberUser} onChange={() => this.props.onRememberUserClicked()} /></div>
        <div><button onClick={() => this.props.onSignInClick({username: this.state.username, password: this.state.password})}>Sign In</button></div>
        <p>Sign In Error: {this.props.signInError}</p>
        <p>{this.props.signingIn ? 'please wait while signing in ...' : ''}</p>
      </div>
    );
  }
}

SignIn.propTypes = {
  signInError: PropTypes.string.isRequired,
  onSignInClick: PropTypes.func.isRequired,
  signingIn: PropTypes.bool.isRequired,
  rememberUser: PropTypes.bool.isRequired,
  onRememberUserClicked: PropTypes.func.isRequired
}
