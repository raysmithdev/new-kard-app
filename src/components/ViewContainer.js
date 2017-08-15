import React from 'React';

import { View, StyleSheet } from 'react-native';

export default class ViewContainer extends React.Component {
  render() {
    return (
      <View style={[styles.viewContainer, this.props.style || {}]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
});
