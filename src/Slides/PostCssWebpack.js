import React from 'react';

import {
  Center,
  Code,
  CodePane,
  Heading,
  Layout,
  Slide,
  Text,
} from '../components';

export default () => (
  <Slide>
    <Layout>
      <Center>
        <Heading fit>PostCSS with Webpack</Heading>
        <Text fit>Transforming CSS with <Code textSize="1rem">postcss-loader</Code></Text>
        <Text fit>and using <Code textSize="1rem">mini-css-extract-plugin</Code></Text>
      </Center>
      <Center>
        <CodePane lang="git">{`
# using PostCSS with webpack
npm install --save-dev \\
  webpack
  mini-css-extract-plugin
  postcss-loader

# webpack.config.js
const CssPlugin = require(
  "mini-css-extract-plugin"
);

module.exports = {
  module: {
    rules: [{
      test: /\\.css$/,
      use: [
        CssPlugin.loader,
        'postcss-loader',
      ],
    }],
  },
  plugins: [new CssPlugin({
    filename: '[name].css',
  })],
};
        `}</CodePane>
      </Center>
    </Layout>
  </Slide>
);
