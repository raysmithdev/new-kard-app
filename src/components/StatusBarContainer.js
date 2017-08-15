
import React from 'React';
import { View, StatusBar, StyleSheet } from 'react-native';

export default class StatusBarContainer extends React.Component {
  render() {
    return (
      <View style={[styles.statusBarView, this.props.style || {}]}>
        <StatusBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBarView: {
    height: 20
  }
});
