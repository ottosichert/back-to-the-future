import React from 'react';

import {
  Center,
  Code,
  CodePane,
  Fill,
  Heading,
  Layout,
  List,
  ListItem,
  S,
  Slide,
  Text,
} from '../components';

export default () => (
  <Slide>
    <Layout>
      <Center>
        <Heading fit>PostCSS</Heading>
        <Text fit>A tool for transforming CSS with JavaScript</Text>
      </Center>
      <Center>
        <CodePane lang="git">{`
# getting started with PostCSS
npm install --save-dev \\
  cssnano \\
  postcss-cli \\
  postcss-preset-env

# postcss.config.js
module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 0,
      browsers: 'last 2 versions',
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};

# run the PostCSS CLI
postcss src/**/*.css -o bundle.css

# \`bundle.css\` now is a minified
# file with fallbacks for browsers
        `}</CodePane>
      </Center>
    </Layout>
  </Slide>
);
