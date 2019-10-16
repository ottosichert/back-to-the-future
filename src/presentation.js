import 'normalize.css';
import React from 'react';

import { Deck } from './components';
import './quine.css';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import theme from './theme';

export default () => (
  <Deck progress="bar" theme={theme}>
    <Slide1 />
    <Slide2 />
    <Slide3 />
  </Deck>
);
