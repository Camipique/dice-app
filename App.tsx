import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Amplify from 'aws-amplify';
import aws_exports from './src/aws-exports';

import Auth from './src/components/screens/Auth';

Amplify.configure(aws_exports);

const App = () => {
  return (
    <Router>
      <Scene headerMode="none" key="root">
        <Scene key="Auth" component={Auth} initial />
      </Scene>
    </Router>
  );
};

export default App;
