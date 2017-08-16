import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';

import ViewContainer from '../components/ViewContainer';
import StatusBarContainer from '../components/StatusBarContainer';

class AccountScreen extends React.Component {

  render() {
    return (
      <ViewContainer>
        <StatusBarContainer style={{height: 20}} />
        <View style={styles.avatarView}>
          <Avatar
            xlarge
            rounded
            source={{uri: this.props.kard.profileImage}}
          />
          <Text>
            ACCOUNT SCREEN
          </Text>
        </View>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  avatarView: {
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  return {
    kard: state.kard,
    scene: state.scene
  };
};

export default connect(mapStateToProps)(AccountScreen);
