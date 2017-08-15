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
    if (this.props.userLoaded) {
      return (
        <LoginScreen
          actions={actions}
        />
      );
    }
    else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error,
  userLoaded: state.userLoaded,
  initialView: state.initialView
});

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(actions, dispatch)
// });

export default connect(mapStateToProps)(Kard);
