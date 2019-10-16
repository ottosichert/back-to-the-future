import 'normalize.css';
import React from 'react';

import { Deck } from './components';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import theme from './theme';

export default () => (
  <Deck progress="bar" theme={theme}>
    <Slide1 />
    <Slide2 />
  </Deck>
);
