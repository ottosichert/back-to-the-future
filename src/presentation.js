import 'normalize.css';
import React from 'react';

import { Deck } from './components';
import './quine.css';
import Cover from './slides/Cover';
import Theme from './slides/Theme';
import Quine from './slides/Quine';
import VariablesLess from './slides/VariablesLess';
import VariablesScss from './slides/VariablesScss';
import Variables from './slides/Variables';
import theme from './theme';

export default () => (
  <Deck progress="bar" theme={theme}>
    <Cover />
    <Theme />
    <Quine />
    <VariablesLess />
    <VariablesScss />
    <Variables />
  </Deck>
);
