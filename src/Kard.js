import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import * as actions from './actions';

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

  render() {
    // console.log(actions);
    const { userLoaded, initialView } = this.props.scene;
    if (userLoaded) {
      if (initialView === 'Login') {
        return <LoginScreen actions={actions} dispatch={this.props.dispatch} />;
      }
      else {
        return <SendKardScreen actions={actions} />;
      }
    }
    else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    kard: state.kard,
    scene: state.scene
  };
};

export default connect(mapStateToProps)(Kard);
