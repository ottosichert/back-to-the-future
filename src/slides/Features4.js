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
/* gap properties, properties for defining gutters within a layout */
.grid-1 {
  gap: 20px;
}

.grid-2 {
  column-gap: 40px;
  row-gap: 20px;
}

/* gray() function, a function for specifying fully desaturated colors */
p {
  color: gray(50);
}

/* alpha hex colors, a 4 & 8 character hex color notation for specifying the opacity level */
section {
  background-color: #f3f3f3f3;
  color: #0003;
}
        `}</CodePane>
      </Center>
      <Center>
        <CodePane padding="0 2rem">{`
/* hwb() function, a function for specifying colors by hue and then a degree of whiteness and blackness to mix into it */
p {
  color: hwb(120 44% 50%);
}

/* image-set() function, a function for specifying image sources based on the user’s resolution */
p {
  background-image: image-set(
    "foo.png" 1x,
    "foo-2x.png" 2x,
    "foo-print.png" 600dpi
  );
}

/* lab() function, a function for specifying colors expressed in the CIE Lab color space */
body {
  color: lab(240 50 20);
}
        `}</CodePane>
      </Center>
    </Layout>
  </Slide>
);
