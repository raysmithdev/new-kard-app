import * as firebase from 'firebase';
import Database from '../../includes/firebase/database';
import { Actions } from 'react-native-router-flux';

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

export const SET_USER = 'SET_USER';
export const setUser = user => ({
  type: SET_USER,
  user
});

export const FETCH_INITIAL_VIEW = 'FETCH_INITIAL_VIEW';
export const fetchInitialView = () => ({
  type: FETCH_INITIAL_VIEW
});

export const INITIAL_VIEW_SUCCESS = 'INITIAL_VIEW_SUCCESS';
export const initialViewSuccess = () => ({
  type: INITIAL_VIEW_SUCCESS,
});

export const INITIAL_VIEW_FAILURE = 'INITIAL_VIEW_FAILURE';
export const initialViewFailure = error => ({
  type: INITIAL_VIEW_FAILURE,
  error
});

export const getInitialView = () => dispatch => {
  dispatch(fetchInitialView());
  try {
    firebase.auth().onAuthStateChanged((user) => {
      dispatch(initialViewSuccess());
      if (user) {
        dispatch(setUser(user));
        Actions.TabBar();
      }
      else {
        Actions.LoginScreen();
      }
    });
  }
  catch (error) {
    dispatch(initialViewFailure(error));
  }
};

export const firebaseLogin = (loginEmail, loginPassword) => {
  firebase.auth()
    .signInWithEmailAndPassword(loginEmail, loginPassword)
    .catch((err) => {
      console.log(`${err.code}: ${err.message}`);
    });
};

/*
*  The below might be an antipattern, conflating login and signup. Will be
*  switching to OAuth anyway.
*/
export const firebaseSignup = (loginEmail, loginPassword) => {
  firebase.auth()
    .createUserWithEmailAndPassword(loginEmail, loginPassword)
    .then(user => {
      Database.addUserEmail(user.uid, 'My Email', user.email);
    })
    .catch((err) => {
      if (err.code === 'auth/email-already-in-use') {
        firebaseLogin(loginEmail, loginPassword);
      }
      else {
        console.log(`${err.code}: ${err.message}`);
      }
    });
};

export const firebaseLogout = () => {
  firebase.auth().signOut()
    .catch((err) => {
      console.log(`${err.code}: ${err.message}`);
    });
};
