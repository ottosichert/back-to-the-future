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
        <div className="tag different" style={{ marginTop: "2rem" }}>
          <Text textSize="1.5rem" className="pretty">Variables are useful</Text>
          <Text textSize="1.5rem">And supported by CSS</Text>
        </div>
        <Text textSize="1.5rem" className="pretty">Nesting as well</Text>
      </Center>
      <Center>
        <CodePane>{`
/* show class attribute */

div[class]::before {
  content: '<div class="' attr(class) '">'
}

p[class]::before {
  content: '<p class="' attr(class) '">'
}

/* custom styles */

.pretty {
  font-style: italic;
}

.different {
  letter-spacing: 0.125rem;
}

.different .pretty {
  letter-spacing: normal;
}

.different .pretty:not(:last-child) {
  text-transform: capitalize;
}

        `}</CodePane>
      </Center>
    </Layout>
  </Slide>
);
