import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text } from 'react-native';

class LaunchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(this.props.actions.getInitialView());
  }

  render() {
    return (
      <View>
        <Text>
          LAUNCH SCREEN
        </Text>
      </View>
    );
  }

}

const mapStateToProps = state => {
  return {
    kard: state.kard,
    scene: state.scene
  };
};

export default connect(mapStateToProps)(LaunchScreen);
