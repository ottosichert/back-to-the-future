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
import Preprocessors from './slides/Preprocessors';
import Postprocessors from './slides/Postprocessors';
import Processors from './slides/Processors';
import Timeline from './slides/Timeline';
import Trends from './slides/Trends';
import TechDebt from './slides/TechDebt';
import PostCss from './slides/PostCss';
import PostCssWebpack from './slides/PostCssWebpack';
import Features1 from './slides/Features1';
import Features2 from './slides/Features2';
import Features3 from './slides/Features3';
import Features4 from './slides/Features4';
import Features5 from './slides/Features5';
import Features6 from './slides/Features6';
import theme from './theme';

export default () => (
  <Deck progress="bar" theme={theme}>
    <Cover transition={["slide"]} />
    <Theme transitionIn={["fade"]} />
    <Quine />
    <VariablesLess />
    <VariablesScss />
    <VariablesCss />
    <Nesting transitionIn={["fade"]} />
    <NestingLess />
    <NestingScss />
    <NestingCss />
    <Preprocessors transitionIn={["slide"]} />
    <Postprocessors />
    <Processors transitionIn={["fade"]} />
    <Timeline transitionIn={["zoom"]} />
    <Trends transitionIn={["fade"]} />
    <TechDebt transitionIn={["fade"]} />
    <PostCss transitionIn={["slide"]} />
    <PostCssWebpack />
    <Features1 transitionIn={["fade"]} />
    <Features2 />
    <Features3 />
    <Features4 />
    <Features5 />
    <Features6 />
  </Deck>
);
