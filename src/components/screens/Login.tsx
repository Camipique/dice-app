import React, {Fragment} from 'react';
import {Form, Item, Label, Input, Button, Icon, Text, View} from 'native-base';

import FacebookLogin from '../authentication/buttons/FacebookLogin';
import GoogleLogin from '../authentication/buttons/GoogleLogin';
import DefaultLogin from '../authentication/buttons/DefaultLogin';

import LoginForm from '../authentication/LoginForm';

const Login = () => {
  return (
    <Fragment>
      <View>
        <LoginForm />
      </View>
      <View padder>
        <DefaultLogin />
      </View>
      <View
        style={{paddingTop: '5%', paddingBottom: '5%', alignItems: 'center'}}>
        <Text> Or </Text>
      </View>
      <View padder>
        <FacebookLogin />
      </View>
      <View padder>
        <GoogleLogin />
      </View>
    </Fragment>
  );
};

export default Login;
