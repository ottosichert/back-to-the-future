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
      <Center className="quine">
        <Heading fit>Back to the Future</Heading>
        <Text fit>Modern CSS without Tech Debt</Text>
          <div className="tag" style={{ marginTop: "2rem" }}>
            <Text textSize="1.5rem">Variables are useful</Text>
            <Text textSize="1.5rem">And supported by CSS</Text>
          </div>
      </Center>
      <Center>
        <CodePane>{`
/* using CSS variables and property sets */

:root {
  --primary: #eeeeee;
  --secondary: #222831;
  --tertiary: #393e46;
  --quaternary: #00adb5;

  --color-mixin: {
    color: var(--quaternary);
  }
}

body {
  background-color: var(--primary);
  color: var(--tertiary);
}

h1 {
  color: var(--secondary);
}

a {
  @apply --color-mixin;
}

*::before, *::after {
  @apply --color-mixin;
}
        `}</CodePane>
      </Center>
    </Layout>
  </Slide>
);
