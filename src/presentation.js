import 'normalize.css';
import React from 'react';

import {
  Center,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  Slide,
  Text,
} from './components';
import theme from './theme';

export default () => (
  <Deck progress="bar" theme={theme}>
    <Slide>
      <Layout>
        <Center>
          <Heading fit>Back to the Future</Heading>
          <Text fit>Modern CSS without Tech Debt</Text>
        </Center>
        <Fill>
          <Image src="https://github.com/ottosichert.png" width={200} />
          <Text textSize="1.5rem" margin="2rem 0 0" bold>Otto Sichert</Text>
          <Text textSize="1.5rem">Software Development Engineer</Text>
          <Link textSize="1.5rem" href="https://aws.amazon.com/rds" />
          <Link textSize="1.5rem" margin="2rem 0 0" href="mailto:git@ottosichert.de" />
          <Link textSize="1.5rem" href="https://github.com/ottosichert" />
          <Link textSize="1.5rem" href="https://linkedin.com/in/ottosichert" />
        </Fill>
      </Layout>
    </Slide>
  </Deck>
);
