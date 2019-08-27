import React from 'react';
import {Button, Icon, Text} from 'native-base';
import {Actions} from 'react-native-router-flux';

const GameButton = () => {
  return (
    <Button
      vertical
      onPress={() => {
        if (Actions.currentScene !== 'Game') Actions.Game();
      }}>
      <Icon name="dice" type="FontAwesome5" style={{color: 'white'}} />
      <Text style={{color: 'white'}}>Roll</Text>
    </Button>
  );
};

export default GameButton;
