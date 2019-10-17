import React from 'react';

import {
  Center,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
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
        <div style={{ padding: "2rem" }}>
          <Heading fit>Technical Debt</Heading>
          <List>
            <ListItem textSize="1.5rem" margin="1rem"><S type="italic">"Fast delivery now, pay for it later"</S></ListItem>
            <ListItem textSize="1.5rem" margin="1rem">Not the same as <S type="" bold>legacy</S></ListItem>
            <ListItem textSize="1.5rem" margin="1rem">Deprecated software and breaking changes consume resources</ListItem>
            <ListItem textSize="1.5rem" margin="1rem">Maintenance costs grow with time</ListItem>
            <ListItem textSize="1.5rem" margin="1rem">Multiplied by lack of long term design</ListItem>
            <ListItem textSize="1.5rem" margin="1rem">Development gets slow and painful</ListItem>
          </List>
        </div>
      </Center>
      <Center>
        <div style={{ padding: "2rem" }}>
          <Heading fit>Investment</Heading>
          <List>
            <ListItem textSize="1.5rem" margin="1rem">Requires either upfront design or migration of existing system</ListItem>
            <ListItem textSize="1.5rem" margin="1rem">Cost often lower than expected</ListItem>
            <ListItem textSize="1.5rem" margin="1rem">Effects must be visible and useful</ListItem>
            <ListItem textSize="1.5rem" margin="1rem">Value of asset increases with time</ListItem>
          </List>
        </div>
      </Center>
    </Layout>
  </Slide>
);
