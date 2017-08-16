import * as firebase from 'firebase';

export const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL';
export const setLoginEmail = loginEmail => ({
  type: SET_LOGIN_EMAIL,
  loginEmail
});

export const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';
export const setLoginPassword = loginPassword => ({
  type: SET_LOGIN_PASSWORD,
  loginPassword
});

export const SET_INITIAL_VIEW = 'SET_INITIAL_VIEW';
export const setInitialView = initialView => ({
  type: SET_INITIAL_VIEW,
  initialView
});

export const getInitialView = () => dispatch => {
  firebase.auth().onAuthStateChanged((user) => {
    let initialView = user ? 'Home' : 'Login';
    dispatch(setInitialView(initialView));
  });
};
