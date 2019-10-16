import React from 'react';
import styled from 'react-emotion';
import { CodePane } from 'spectacle';

import "./index.css";


const CustomCodePane = styled(({ children, ...props }) => (
  <CodePane
    source={children.trim()}
    {...props}
  />
))`
  font-size: 1rem;
`;

CustomCodePane.defaultProps = {
  ...CustomCodePane.defaultProps,
  children: '',
  className: 'CustomCodePane',
  lang: 'css',
  padding: '0 4rem',
};

export default CustomCodePane;
