import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import * as actions from './actions';

import LoginScreen from './screens/LoginScreen';

export class Kard extends React.Component {

  render() {
    return (
      <LoginScreen
        actions={actions}
      />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps)(Kard);
