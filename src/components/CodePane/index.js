import React from 'react';
import { CodePane } from 'spectacle';

import "./index.css";

const CustomCodePane = ({ children, ...props }) => (
  <CodePane
    source={children.trim()}
    {...props}
  />
);

CustomCodePane.defaultProps = {
  ...CustomCodePane.defaultProps,
  children: '',
  className: 'CustomCodePane',
  lang: 'css',
  padding: '0 4rem',
};

export default CustomCodePane;
