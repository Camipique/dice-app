import React from 'react';
import {Button, Text, Icon} from 'native-base';

const FacebookLogin = () => {
  return (
    <Button
      full
      rounded
      primary
      onPress={() => {
        console.log('login with facebook');
      }}>
      <Icon type="FontAwesome5" name="facebook" />
      <Text>Login With Facebook</Text>
    </Button>
  );
};

export default FacebookLogin;
