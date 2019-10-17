import React from 'react';

import {
  Center,
  Heading,
  Layout,
  Slide,
  Text,
} from '../components';

export default () => (
  <Slide>
    <Layout>
      <Center>
        <div style={{ padding: "2rem" }}>
          <Heading fit>Back to the Future</Heading>
          <Text fit>Modern CSS without Tech Debt</Text>
        </div>
      </Center>
      <Center>
        <div style={{ padding: "2rem" }}>
          <Heading fit>Question time</Heading>
        </div>
      </Center>
    </Layout>
  </Slide>
);
