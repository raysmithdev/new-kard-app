import React from 'react';
import { List, ListItem } from 'react-native-elements';
import { Text } from 'react-native';

import ViewContainer from '../ViewContainer';
import StatusBarContainer from '../StatusBarContainer';

export default AccountListContent = () => {
  return (
    <ViewContainer>
      <StatusBarContainer style={{height: 20}} />
      <Text>
        THIS IS WHERE CONTENT GOES
      </Text>
    </ViewContainer>
  );
};
