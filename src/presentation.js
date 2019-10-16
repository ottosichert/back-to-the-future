import 'normalize.css';
import React from 'react';

import { Deck } from './components';
import './quine.css';
import Cover from './slides/Cover';
import Theme from './slides/Theme';
import Quine from './slides/Quine';
import theme from './theme';

export default () => (
  <Deck progress="bar" theme={theme}>
    <Cover />
    <Theme />
    <Quine />
  </Deck>
);
