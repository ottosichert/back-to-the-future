import 'normalize.css';
import React from 'react';

import { Deck } from './components';
import './quine.css';
import Cover from './slides/Cover';
import Theme from './slides/Theme';
import Quine from './slides/Quine';
import VariablesLess from './slides/VariablesLess';
import VariablesScss from './slides/VariablesScss';
import VariablesCss from './slides/VariablesCss';
import Nesting from './slides/Nesting';
import NestingLess from './slides/NestingLess';
import NestingScss from './slides/NestingScss';
import NestingCss from './slides/NestingCss';
import Features1 from './slides/Features1';
import Features2 from './slides/Features2';
import Features3 from './slides/Features3';
import Features4 from './slides/Features4';
import Features5 from './slides/Features5';
import Features6 from './slides/Features6';
import Preprocessors from './slides/Preprocessors';
import Postprocessors from './slides/Postprocessors';
import theme from './theme';

export default () => (
  <Deck progress="bar" theme={theme}>
    <Cover />
    <Theme />
    <Quine />
    <VariablesLess />
    <VariablesScss />
    <VariablesCss />
    <Nesting />
    <NestingLess />
    <NestingScss />
    <NestingCss />
    <Features1 />
    <Features2 />
    <Features3 />
    <Features4 />
    <Features5 />
    <Features6 />
    <Preprocessors />
    <Postprocessors />
  </Deck>
);
