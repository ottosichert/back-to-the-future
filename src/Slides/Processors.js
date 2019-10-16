import React from 'react';

import {
  Center,
  Fill,
  Heading,
  Layout,
  List,
  ListItem,
  Slide,
  Text,
} from '../components';

export default () => (
  <Slide>
    <Layout>
      <Center>
        <Heading fit>
          CSS Processors
        </Heading>
        <Text fit>like Less, Sass, Stylus, PostCSS</Text>
      </Center>
      <Fill>
        <List margin="0 0 0 4rem">
          <ListItem textSize="1.5rem" margin="1rem">Full pipeline from any CSS language to optimized browser bundle</ListItem>
          <ListItem textSize="1.5rem" margin="1rem">Development and production builds</ListItem>
          <ListItem textSize="1.5rem" margin="1rem">Plugin ecosystem and configuration</ListItem>
          <ListItem textSize="1.5rem" margin="1rem">CLI tools and bundler integrations</ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>
);
