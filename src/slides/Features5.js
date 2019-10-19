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
/* lch() function, a function for specifying colors expressed in the CIE Lab color space with chroma and hue */
body {
  color: lch(53 105 40);
}

/* logical properties and values, flow-relative (left-to-right or right-to-left) properties and values */
span:first-child {
  float: inline-start;
  margin-inline-start: 10px;
}

/* media query ranges, a syntax for defining media query ranges using ordinary comparison operators */
@media (width < 480px) {}

@media (480px <= width < 768px) {}

@media (width >= 768px) {}
        `}</CodePane>
      </Center>
      <Center>
        <CodePane padding="0 2rem">{`
/* :matches pseudo-class, a pseudo-class for matching elements in a selector list */
p:matches(:first-child, .special) {
  margin-top: 1em;
}

/* nesting rules, a syntax for nesting relative rules within rules */
article {
  & p {
    color: #333;
  }
}

/* place properties, properties for defining alignment within a layout */
.example {
  place-content: flex-end;
  place-items: center / space-between;
  place-self: flex-start / center;
}
        `}</CodePane>
      </Center>
    </Layout>
  </Slide>
);
