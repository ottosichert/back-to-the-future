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
/* break properties, properties for defining the break behavior between and within boxes */
a {
  break-inside: avoid;
  break-before: avoid-column;
  break-after: always;
}

/* case-insensitive attributes, an attribute selector matching attribute values case-insensitively */
[frame=hsides i] {
  border-style: solid none;
}

/* functional color notation, a space and slash separated notation for specifying colors */
em {
  background-color: hsl(120deg 100% 25%);
  box-shadow: 0 0 0 10px hwb(120deg 100% 25% / 80%);
  color: rgb(0 255 0);
}
        `}</CodePane>
      </Center>
      <Center>
        <CodePane padding="0 2rem">{`
/* custom media queries, an at-rule for defining aliases that represent media queries */
@custom-media --narrow-window (max-width: 30em);

@media (--narrow-window) {}

/* custom properties, a syntax for defining custom values accepted by all CSS properties */
img {
  --some-length: 32px;

  height: var(--some-length);
  width: var(--some-length);
}

/* custom selectors, an at-rule for defining aliases that represent selectors */
@custom-selector :--heading h1, h2, h3, h4, h5, h6;

article :--heading + p {}
        `}</CodePane>
      </Center>
    </Layout>
  </Slide>
);
