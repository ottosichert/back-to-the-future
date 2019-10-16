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
      </Center>
      <Center>
        <CodePane>{`
/* show HTML tags */

*::before, *::after {
  color: #00adb5;
  font-size: 0.5rem;
  font-weight: normal;
  vertical-align: middle;
}

div::before {
  content: '<div>'
}
div::after {
  content: '</div>'
}

h1::before {
  content: '<h1>'
}
h1::after {
  content: '</h1>'
}

p::before {
  content: '<p>'
}
p::after {
  content: '</p>'
}
        `}</CodePane>
      </Center>
    </Layout>
  </Slide>
);
