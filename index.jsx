import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import signInReducer from './reducers/signInReducer';
import SignInContainer from './containers/signInContainer';


const App = () => (<div>{<SignInContainer />}</div>);

let store = createStore(
  signInReducer,
  applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      createLogger() // neat middleware that logs actions
    )
  );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
