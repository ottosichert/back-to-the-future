import React from 'react';

import { Image, Slide } from '../components';

export default () => (
  <Slide>
    {/* https://trends.google.com/trends/explore?date=2009-10-17%202019-10-17&q=%2Fm%2F019syg,%2Fm%2F0hjc5m0 */}
    <Image src="10y-ecma-coffee.png" height={300} margin="2rem 0" />

    {/* https://trends.google.com/trends/explore?date=2009-10-17%202019-10-17&q=css%204,%2Fm%2F0gjd0jv */}
    <Image src="10y-css4-less.png" height={300} margin="2rem 0" />
  </Slide>
);
