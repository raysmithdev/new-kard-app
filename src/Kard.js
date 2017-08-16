import React from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import * as actions from './actions';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Firebase from '../includes/firebase/firebase';
import LoginScreen from './screens/LoginScreen';
import SendKardScreen from './screens/SendKardScreen';

export class Kard extends React.Component {
  constructor(props) {
    super(props);
    // Should these be in the constructor or in componentDidMount()?
    Firebase.initialize();
    this.props.dispatch(actions.getInitialView());
  }

  // componentDidMount() {
  //   const { userLoaded, initialView } = this.props.scene;
  //   if (userLoaded) {
  //     if (initialView === 'SendKardScreen') {
  //       Actions.SendKardScreen;
  //     }
  //     else {
  //       Actions.LoginScreen;
  //     }
  //   }
  // }

  // render() {
  //   const { userLoaded, initialView } = this.props.scene;
  //   if (userLoaded) {
  //     if (initialView === 'Login') {
  //       return (
  //         <LoginScreen
  //           actions={actions}
  //           dispatch={this.props.dispatch}
  //           kard={this.props.kard}
  //         />
  //       );
  //     }
  //     else {
  //       return <SendKardScreen actions={actions} />;
  //     }
  //   }
  //   else {
  //     return null;
  //   }
  // }
  render() {
    console.log(Actions.scene);
    return (
      <Router>
        <Scene key='root'>
          <Scene
            key='LoginScreen'
            component={LoginScreen}
            title='Login'
            actions={actions}
            dispatch={this.props.dispatch}
            kard={this.props.kard}
          />
          <Scene
            key='SendKardScreen'
            component={SendKardScreen}
            title='Send Kard'
            actions={actions}
          />
        </Scene>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    kard: state.kard,
    scene: state.scene
  };
};

export default connect(mapStateToProps)(Kard);
