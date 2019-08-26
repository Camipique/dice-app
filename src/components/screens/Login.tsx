import React, {Fragment} from 'react';
import {Form, Item, Label, Input, Button, Icon, Text, View} from 'native-base';

const Login = () => {
  return (
    <Fragment>
      <View>
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
      </View>
      <View padder>
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
      </View>
      <View
        style={{paddingTop: '5%', paddingBottom: '5%', alignItems: 'center'}}>
        <Text> Or </Text>
      </View>
      <View padder>
        <Button
          full
          rounded
          primary
          onPress={() => {
            console.log('login');
          }}>
          <Icon type="FontAwesome5" name="facebook" />
          <Text>Login With Facebook</Text>
        </Button>
      </View>
      <View padder>
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
      </View>
    </Fragment>
  );
};

export default Login;
