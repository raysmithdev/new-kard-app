import React from 'react';
import { connect, Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import store from './src/store';
import * as firebase from 'firebase';
import * as actions from './src/actions';

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
              key='TabBar'
              tabs
            >
              <Scene
                key='SendKardScreen'
                component={SendKardScreen}
                title='Send Kard'
                actions={actions}
                icon={() => <Icon name='send' size={35} />}
              />
            </Scene>
          </Scene>
        </ReduxRouter>
      </Provider>
    );
  }
}
