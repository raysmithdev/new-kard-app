import * as firebase from 'firebase';

class Firebase {

  static initialize() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAtl4S67fnuSBPPnKSG8Dz-eaucKhVd9qE',
      authDomain: 'kard-app-d1d74.firebaseapp.com',
      databaseURL: 'https://kard-app-d1d74.firebaseio.com',
      projectId: 'kard-app-d1d74',
      storageBucket: 'kard-app-d1d74.appspot.com',
      messagingSenderId: '435467963863'
    });
  }
}

module.exports = Firebase;
