import React from 'react';
import {Footer, FooterTab} from 'native-base';

import GameButton from './buttons/GameButton';
import PrizesButton from './buttons/PrizesButton';
import ExtraRollsButton from './buttons/ExtraRollsButton';

const FooterComponent = () => {
  return (
    <Footer>
      <FooterTab style={{backgroundColor: '#388e3c'}}>
        <GameButton />
        <PrizesButton />
        <ExtraRollsButton />
      </FooterTab>
    </Footer>
  );
};

export default FooterComponent;
