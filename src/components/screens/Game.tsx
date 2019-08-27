import React from 'react';
import {Animated, Dimensions, StyleSheet, Text} from 'react-native';
import {Container, Content, View, Header, Left, Body} from 'native-base';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const _startXPos = () => {
  const left = Math.random() * -100 - 100;
  const right = Math.random() * 100 + width;

  const options = [left, right];

  return options[Math.floor(Math.random() * options.length)];
};

const _startYPos = () => {
  return Math.random() * (height + 100) - 100;
};

const positionAnimationDie1 = new Animated.ValueXY({
  x: 0,
  y: -150,
});
const positionAnimationDie2 = new Animated.ValueXY({
  x: 0,
  y: -150,
});

const spinAnimationDie1 = new Animated.Value(0);
const spinAnimationDie2 = new Animated.Value(0);

let {width, height} = Dimensions.get('window');

height = height - 150; // deduct footer height

const _roll = () => {
  const startX = _startXPos();
  const startY = _startYPos();

  positionAnimationDie1.setValue({
    x: startX,
    y: startY,
  });

  positionAnimationDie2.setValue({
    x: startX,
    y: startY,
  });

  Animated.parallel([
    Animated.timing(positionAnimationDie1, {
      toValue: {
        x: Math.floor(Math.random() * (width - 100) + 10),
        y: Math.floor(Math.random() * (height - 120)),
      },
    }),
    Animated.timing(spinAnimationDie1, {
      toValue: Math.random() * 25 + 5,
      duration: 600,
    }),
    Animated.timing(positionAnimationDie2, {
      toValue: {
        x: Math.floor(Math.random() * (width - 100) + 10),
        y: Math.floor(Math.random() * (height - 150)),
      },
    }),
    Animated.timing(spinAnimationDie2, {
      toValue: Math.random() * 25 + 5,
      duration: 600,
    }),
  ]).start();
};

const spinDie1 = spinAnimationDie1.interpolate({
  inputRange: [5, 25],
  outputRange: ['720deg', '1500deg'],
});

const spinDie2 = spinAnimationDie2.interpolate({
  inputRange: [5, 25],
  outputRange: ['720deg', '1500deg'],
});

const Game = () => {
  return (
    <Container>
      <Header
        androidStatusBarColor="#2a6a2d"
        style={{backgroundColor: '#388e3c'}}>
        <Left>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
            }}>
            Game
          </Text>
        </Left>
        <Body />
      </Header>
      <Content>
        <View onTouchEnd={() => _roll()} style={styles.table}>
          <Animated.Image
            style={[
              positionAnimationDie1.getLayout(),
              {
                transform: [{rotate: spinDie1}],
              },
            ]}
            source={require('../../assets/dice/dieWhite_border3.png')}
          />
          <Animated.Image
            style={[
              positionAnimationDie2.getLayout(),
              {
                transform: [{rotate: spinDie2}],
              },
            ]}
            source={require('../../assets/dice/dieWhite_border4.png')}
          />
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  table: {
    backgroundColor: '#4caf50',
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('100%') - 135,
    position: 'relative',
  },
});

export default Game;
