import * as actions from '../actions';

const initialState = {
  loading: false,
  error: null,
  loginEmail: null,
  loginPassword: null,

};

const kardReducer = (state = initialState, action) => {
  switch (action.type) {

  case actions.SET_LOGIN_EMAIL:
    return Object.assign({}, state, {
      loginEmail: action.loginEmail
    });

  case actions.SET_LOGIN_PASSWORD:
    return Object.assign({}, state, {
      loginPassword: action.loginPassword
    });

  case actions.SET_USER:
    return Object.assign({}, state, {
      user: action.user
    });

  default:
    return state;
  }
};

export default kardReducer;
