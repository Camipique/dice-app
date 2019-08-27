import React from 'react';
import {Button, Text, Icon} from 'native-base';

const GoogleLogin = () => {
  return (
    <Button
      full
      rounded
      danger
      onPress={() => {
        console.log('login');
      }}>
      <Icon type="FontAwesome5" name="google-plus-g" />
      <Text>Login With Google+</Text>
    </Button>
  );
};

export default GoogleLogin;
