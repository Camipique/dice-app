import React from 'react';
import {Form, Item, Label, Input} from 'native-base';

const LoginForm = () => {
  return (
    <Form>
      <Item stackedLabel>
        <Label>Username</Label>
        <Input
          onChangeText={() => {
            console.log('changing username');
          }}
        />
      </Item>
      <Item stackedLabel last>
        <Label>Password</Label>
        <Input
          secureTextEntry
          onChangeText={() => {
            console.log('changing password');
          }}
        />
      </Item>
    </Form>
  );
};

export default LoginForm;
