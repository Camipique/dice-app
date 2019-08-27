import React from 'react';
import {Button, Text, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';

const DefaultLogin = () => {
  return (
    <Button
      full
      rounded
      success
      onPress={() => {
        console.log('login');
        Actions.reset('Login');
      }}>
      <Icon type="FontAwesome5" name="sign-in-alt" />
      <Text>Login</Text>
    </Button>
  );
};

export default DefaultLogin;
