import React from 'react';
import {
  Container,
  Header,
  Title,
  Body,
  Text,
  Left,
  Right,
  Tabs,
  Tab,
  TabHeading,
} from 'native-base';

import LoginScreen from './Login';

const Auth = () => {
  return (
    <Container>
      <Header hasTabs style={{backgroundColor: 'green'}}>
        <Left style={{flex: 1}} />
        <Body style={{flex: 1, alignItems: 'center'}}>
          <Title>Dice App</Title>
        </Body>
        <Right style={{flex: 1}} />
      </Header>
      <Tabs>
        <Tab
          heading={
            <TabHeading>
              <Text>Login</Text>
            </TabHeading>
          }>
          <LoginScreen />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Text>Sign Up</Text>
            </TabHeading>
          }>
          <Text>Tab2</Text>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Auth;
