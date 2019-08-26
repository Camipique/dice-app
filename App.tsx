import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Auth from './src/components/screens/Auth';

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
