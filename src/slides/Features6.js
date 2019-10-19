import React from 'react';

import {
  Center,
  CodePane,
  Layout,
  Slide,
} from '../components';

export default () => (
  <Slide>
    <Layout>
      <Center>
        <CodePane padding="0 2rem">{`
/* :not pseudo-class, a pseudo-class for ignoring elements in a selector list */
p:not(:first-child, .special) {
  margin-top: 1em;
}

/* overflow shorthand property, a property for defining \`overflow-x\` and \`overflow-y\` */
html {
  overflow: hidden auto;
}

/* overflow-wrap property, a property for defining whether to insert line breaks within words to prevent overflowing */
p {
  overflow-wrap: break-word;
}

/* system-ui font family, a generic font used to match the user’s interface */
body {
  font-family: system-ui;
}
        `}</CodePane>
      </Center>
      <Center>
        <CodePane padding="0 2rem">{`
/* prefers-color-scheme media query, a media query to detect if the user has requested the system use a light or dark color theme */
body {
  background-color: white;
  color: black;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
    color: white;
  }
}

/* rebeccapurple color, a particularly lovely shade of purple in memory of Rebecca Alison Meyer */
html {
  color: rebeccapurple;
}
        `}</CodePane>
      </Center>
    </Layout>
  </Slide>
);
