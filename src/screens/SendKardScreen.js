import React from 'react';
import { Text } from 'react-native';

import ViewContainer from '../components/ViewContainer';
import StatusBarContainer from '../components/StatusBarContainer';

export default function SendKardScreen(props) {
  return (
    <ViewContainer>
      <StatusBarContainer />
      <Text>
        SEND KARD SCREEN
      </Text>
    </ViewContainer>
  );
}
