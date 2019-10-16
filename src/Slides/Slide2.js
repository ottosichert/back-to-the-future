import React from 'react';

import {
  Center,
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
        <Heading fit>Back to the Future</Heading>
        <Text fit>Modern CSS without Tech Debt</Text>
      </Center>
      <Center>
        <CodePane
          className="slide-code"
          lang="css"
          padding="0 4rem"
          source={`
/* color theme */

body {
  background-color: #eeeeee;
  color: #393e46;
}

h1 {
  color: #222831;
}

a {
  color: #00adb5;
}
          `.trim()}
        />
      </Center>
    </Layout>
  </Slide>
);
