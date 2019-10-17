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

/* sources 17.10.2019:
- https://medium.com/@ddprrt/deconfusing-pre-and-post-processing-d68e3bd078a3
- https://csspark.com/blog/css-pre-vs-post-processing/
*/

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
