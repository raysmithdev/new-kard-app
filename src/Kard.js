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
    actions.getInitialView(this.props.dispatch);
  }

  render() {
    const { userLoaded, initialView } = this.props.scene;
    if (userLoaded) {
      if (initialView === 'Login') {
        return <LoginScreen actions={actions} />;
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
}

  ;

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(actions, dispatch)
// });

export default connect(mapStateToProps)(Kard);
