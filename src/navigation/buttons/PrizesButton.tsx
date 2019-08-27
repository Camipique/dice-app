import React from 'react';
import {Button, Icon, Text} from 'native-base';
import {Actions} from 'react-native-router-flux';

const PrizesButton = () => {
  return (
    <Button
      vertical
      onPress={() => {
        if (Actions.currentScene !== 'Prizes') Actions.Prizes();
      }}>
      <Icon style={{color: 'white'}} name="ticket" type="Entypo" />
      <Text style={{color: 'white'}}>Prizes</Text>
    </Button>
  );
};

export default PrizesButton;
