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
/* :dir pseudo-class, a pseudo-class for matching elements based on their directionality */
blockquote:dir(rtl) {
  margin-right: 10px;
}

blockquote:dir(ltr) {
  margin-left: 10px;
}

/* double position gradients, a syntax for using two positions in a gradient. */
.pie_chart {
  background-image: conic-gradient(yellowgreen 40%, gold 0deg 75%, #f06 0deg);
}

/* font-variant property, a property for defining the usage of alternate glyphs in a font */
h2 {
  font-variant: small-caps;
}
        `}</CodePane>
      </Center>
      <Center>
        <CodePane padding="0 2rem">{`
/* custom environment variables, a syntax for using custom values accepted by CSS globally */
@media (max-width: env(--brand-small)) {
  body {
    padding: env(--brand-spacing);
  }
}

/* :focus-visible pseudo-class, a pseudo-class for matching focused elements that indicate that focus to a user */
:focus:not(:focus-visible) {
  outline: 0;
}

/* :focus-within pseudo-class, a pseudo-class for matching elements that are either focused or that have focused descendants */
form:focus-within {
  background: rgba(0, 0, 0, 0.3);
}
        `}</CodePane>
      </Center>
    </Layout>
  </Slide>
);
