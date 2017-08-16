import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, TextInput, View, Button, Image, StyleSheet } from 'react-native';

import ViewContainer from '../components/ViewContainer';
import StatusBarContainer from '../components/StatusBarContainer';

class LoginScreen extends React.Component {
  onEmailChange(email) {
    this.props.dispatch(this.props.actions.setLoginEmail(email));
  };
  onPasswordChange(password) {
    this.props.dispatch(this.props.actions.setLoginPassword(password));
  };
  handleLoginSubmit() {
    this.props.actions.firebaseSignup(this.props.kard.loginEmail, this.props.kard.loginPassword);
  };

  render () {
    return (
      <ViewContainer>
        <StatusBarContainer />
        <View style={styles.loginView}>
          <Image
            style={styles.logoImage}
            source={require('../../assets/logo.png')}
        />
          <Text style={styles.welcomeText}>
          Welcome to Kard App!
          Please enter your login information below to get started.
        </Text>
          <TextInput
            autoCorrect={false}
            autoFocus
            keyboardType={'email-address'}
            placeholder='Enter your email address'
            placeholderTextColor='deepskyblue'
            returnKeyType='next'
            style={styles.textInput}
            onChangeText={(e) => this.onEmailChange(e)}
        />
          <TextInput
            autoCorrect={false}
            placeholder='Enter your password'
            placeholderTextColor='deepskyblue'
            returnKeyType='done'
            secureTextEntry
            style={styles.textInput}
            onChangeText={(e) => this.onPasswordChange(e)}
        />
          <View style={styles.submitView}>
            <Button
              accessibilityLabel='Submit your login information'
              color='deepskyblue'
              title='Submit'
              onPress={() => this.handleLoginSubmit()}
          />
          </View>
        </View>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  loginView: {
    // backgroundColor: 'red',
  },
  logoImage: {
    width: 300,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  welcomeText: {
    alignSelf: 'center',
    width: 350,
    textAlign: 'center'
  },
  textInput: {
    borderColor: 'grey',
    borderWidth: 1,
    height: 40,
    marginTop: 10
  },
  submitView: {
    marginTop: 10
  }
});

export default connect(({ routes }) => ({ routes }))(LoginScreen);
