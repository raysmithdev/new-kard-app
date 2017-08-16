import React from 'react';
import { connect, Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import store from './src/store';
import * as firebase from 'firebase';
import * as actions from './src/actions';

import Kard from './src/Kard';
import Firebase from './includes/firebase/firebase';
import LaunchScreen from './src/screens/LaunchScreen';
import LoginScreen from './src/screens/LoginScreen';
import SendKardScreen from './src/screens/SendKardScreen';

const ReduxRouter = connect()(Router);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initialize();
  }
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter>
          <Scene key='root'>
            <Scene
              key='LaunchScreen'
              component={LaunchScreen}
              actions={actions}
              initial
            />
            <Scene
              key='LoginScreen'
              component={LoginScreen}
              title='Login'
              actions={actions}
            />
            <Scene
              key='SendKardScreen'
              component={SendKardScreen}
              title='Send Kard'
              actions={actions}
            />
          </Scene>
        </ReduxRouter>
      </Provider>
    );
  }
}
