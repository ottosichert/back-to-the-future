import React from 'react';

import {
  Center,
  CodePane,
  Heading,
  Layout,
  Link,
  Slide,
  Text,
} from '../components';

export default () => (
  <Slide>
    <Layout>
      <Center>
        <Heading fit>Modern CSS features</Heading>
        <Text fit>with postcss-preset-env</Text>
        <Link textSize="1.5rem" margin="2rem 0 0 " href="https://preset-env.cssdb.org/" />
      </Center>
      <Center>
        <CodePane padding="0 2rem">{`
/* all property, a property for defining the reset of all properties of an element */
a {
  all: initial;
}

/* :any-link pseudo-class, a pseudo-class for matching anchor elements independent of whether they have been visited */
nav :any-link > span {
  background-color: yellow;
}

/* :blank empty-value pseudo-class, a pseudo-class for matching form elements when they are empty */
input:blank {
  background-color: yellow;
}
        `}</CodePane>
      </Center>
    </Layout>
  </Slide>
);
