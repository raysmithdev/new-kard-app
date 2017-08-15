import * as firebase from 'firebase';

export const SET_INITIAL_VIEW = 'SET_INITIAL_VIEW';
export const setInitialView = initialView => ({
  type: SET_INITIAL_VIEW,
  initialView
});

export const getInitialView = dispatch => {
  firebase.auth().onAuthStateChanged((user) => {
    let initialView = user ? 'Home' : 'Login';

    dispatch(setInitialView(initialView));
  });
};
