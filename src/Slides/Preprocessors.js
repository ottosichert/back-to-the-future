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
          CSS <S type="underline" bold>Pre</S>processors
        </Heading>
        <Text fit>like Less, Sass, Stylus</Text>
      </Center>
      <Fill>
        <List margin="0 0 0 4rem">
          <ListItem textSize="1.5rem" margin="1rem">Transform CSS language extensions to standard CSS</ListItem>
          <ListItem textSize="1.5rem" margin="1rem">
            <Code textSize="1.5rem">*.less</Code>, <Code textSize="1.5rem">*.scss</Code> and <Code textSize="1.5rem">*.styl</Code> to <Code textSize="1.5rem">*.css</Code>
          </ListItem>
          <ListItem textSize="1.5rem" margin="1rem">Languages include various features: Variables, Mixins, Nesting, Functions</ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>
);
