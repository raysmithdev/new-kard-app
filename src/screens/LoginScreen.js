import React from 'react';
import { Text, TextInput, View, Button, Image, StyleSheet } from 'react-native';

import ViewContainer from '../components/ViewContainer';
import StatusBarContainer from '../components/StatusBarContainer';

export default function LoginScreen(props) {
  const handleLoginSubmit = () => {
    console.log('Login submitted');
  };

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
        />
        <TextInput
          autoCorrect={false}
          placeholder='Enter your password'
          placeholderTextColor='deepskyblue'
          returnKeyType='done'
          secureTextEntry
          style={styles.textInput}
        />
        <View style={styles.submitView}>
          <Button
            accessibilityLabel='Submit your login information'
            color='deepskyblue'
            title='Submit'
            onPress={() => handleLoginSubmit()}
          />
        </View>
      </View>
    </ViewContainer>
  );
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
