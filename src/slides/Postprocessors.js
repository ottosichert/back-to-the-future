import React from 'react';

import {
  Center,
  Code,
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
        <Heading fit>
          CSS <S type="underline" bold>Post</S>processors
        </Heading>
        <Text fit>like PostCSS, Autoprefixer</Text>
      </Center>
      <Fill>
        <List margin="0 0 0 4rem">
          <ListItem textSize="1.5rem" margin="1rem">Optimize modern CSS for browsers</ListItem>
          <ListItem textSize="1.5rem" margin="1rem">Add fallbacks for older CSS versions</ListItem>
          <ListItem textSize="1.5rem" margin="1rem">
            Add vendor prefixes <Code textSize="1.5rem">-webkit-*</Code>, <Code textSize="1.5rem">-moz-*</Code>, <Code textSize="1.5rem">-ms-*</Code> and <Code textSize="1.5rem">-o-*</Code>
          </ListItem>
          <ListItem textSize="1.5rem" margin="1rem">Remove unused styles and minify</ListItem>
          <ListItem textSize="1.5rem" margin="1rem">Inline imports and bundle</ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>
);
