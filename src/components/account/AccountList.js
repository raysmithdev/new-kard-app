import React from 'react';
import { List, ListItem } from 'react-native-elements';

import { Actions } from 'react-native-router-flux';

export default AccountList = props => {
  return (
    <List containerStyle={{marginBottom: 20}}>
      <ListItem
        key={'PhoneNumbers'}
        title='Phone Numbers'
        onPress={() => console.log('PhoneNumbers')}
      />
      <ListItem
        key={'Addresses'}
        title='Addresses'
        onPress={() => console.log('Addresses')}
      />
      <ListItem
        key={'Emails'}
        title='Emails'
        onPress={() => console.log(Actions)}
      />
      <ListItem
        key={'Websites'}
        title='Websites'
        onPress={() => console.log('Websites')}
      />
      <ListItem
        key={'SocialMedia'}
        title='Social Media'
        onPress={() => console.log('SocialMedia')}
      />
      <ListItem
        key={'UserContent'}
        title='User Created Content'
        onPress={() => console.log('UserContent')}
      />
    </List>
  );
};
