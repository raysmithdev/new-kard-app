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
