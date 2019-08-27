import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Amplify from 'aws-amplify';
import aws_exports from './src/aws-exports';

import Footer from './src/navigation/Footer';

import AuthScreen from './src/components/screens/Auth';
import GameScreen from './src/components/screens/Game';

Amplify.configure(aws_exports);

const App = () => {
  return (
    <Router>
      <Scene headerMode="none" key="root">
        <Scene key="Auth" component={AuthScreen} initial />
        <Scene tabs tabBarComponent={Footer} headerMode="none" key="Login">
          <Scene key="Game" component={GameScreen} title="Game" initial />
          <Scene key="Prizes" component={GameScreen} title="Prizes" />
          <Scene key="ExtraRolls" component={GameScreen} title="ExtraRolls" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default App;
