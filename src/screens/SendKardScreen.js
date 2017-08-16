import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

import ViewContainer from '../components/ViewContainer';
import StatusBarContainer from '../components/StatusBarContainer';

class SendKardScreen extends React.Component {
  sendKard() {
    this.props.actions.firebaseLogout();
  };

  render() {
    return (
      <ViewContainer>
        <StatusBarContainer style={{height: 20}} />
        <View>
          <Text style={styles.sendEmailText}>
          Who would you like to send a Kard to?
        </Text>
          <TextInput
            style={styles.emailInput}
            autoFocus
            keyboardType='email-address'
            placeholder='Enter an email address'
         />
          {/* <ContactInfoButtons navigation={this.props.navigation} />
        <SocialMediaButtons navigation={this.props.navigation} />
        <UserContentButtons navigation={this.props.navigation} /> */}
          <Button
            title='SEND'
            onPress={() => this.sendKard()} />
        </View>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  sendEmailText: {
    alignSelf: 'center',
    width: 350,
    textAlign: 'center'
  },
  emailInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray'
  }
});

const mapStateToProps = state => {
  return {
    kard: state.kard,
    scene: state.scene
  };
};

export default connect(mapStateToProps)(SendKardScreen);
