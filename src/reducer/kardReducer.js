import * as actions from '../actions';

const initialState = {
  loading: false,
  error: null,
  loginEmail: null,
  loginPassword: null
};

const kardReducer = (state = initialState, action) => {
  console.log('reducer', state.loginEmail, state.loginPassword);
  switch (action.type) {

  case actions.SET_LOGIN_EMAIL:
    return Object.assign({}, state, {
      loginEmail: action.loginEmail
    });

  case actions.SET_LOGIN_PASSWORD:
    return Object.assign({}, state, {
      loginPassword: action.loginPassword
    });

  default:
    return state;
  }
};

export default kardReducer;
