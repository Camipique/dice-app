import React from 'react';
import {Button, Icon, Text} from 'native-base';
import {Actions} from 'react-native-router-flux';

const ExtraRollsButton = () => {
  return (
    <Button
      vertical
      onPress={() => {
        if (Actions.currentScene !== 'ExtraRolls') Actions.ExtraRolls();
      }}>
      <Icon style={{color: 'white'}} name="md-briefcase" />
      <Text style={{color: 'white'}}>Extra</Text>
    </Button>
  );
};

export default ExtraRollsButton;
