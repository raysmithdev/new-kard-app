import React from 'react';
import { List, ListItem } from 'react-native-elements';

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
        onPress={() => console.log('Emails')}
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
