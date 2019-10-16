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
          </div>
      </Center>
      <Center>
        <CodePane>{`
/* using SCSS variables and mixin */

$primary: #eeeeee;
$secondary: #222831;
$tertiary: #393e46;
$quaternary: #00adb5;

@mixin color-mixin {
  color: $quaternary;
}


body {
  background-color: $primary;
  color: $tertiary;
}

a {
  @include color-mixin;
}

*::before, *::after {
  @include color-mixin;
}
        `}</CodePane>
      </Center>
    </Layout>
  </Slide>
);
