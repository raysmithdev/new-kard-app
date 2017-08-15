import React from 'react';
import { Text, TextInput, View, Button, Image, StyleSheet } from 'react-native';

export default function LoginScreen(props) {
  const handleLoginSubmit = () => {
    console.log('Login submitted');
  };

  return (
    <View>
      <Text>
        LoginScreen
      </Text>
    </View>
  );
}
