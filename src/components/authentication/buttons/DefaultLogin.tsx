import React from 'react';
import {Button, Text, Icon} from 'native-base';

const DefaultLogin = () => {
  return (
    <Button
      full
      rounded
      success
      onPress={() => {
        console.log('login');
      }}>
      <Icon type="FontAwesome5" name="sign-in-alt" />
      <Text>Login</Text>
    </Button>
  );
};

export default DefaultLogin;
