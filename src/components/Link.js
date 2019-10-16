import React from 'react';
import styled from 'react-emotion';
import { Link } from 'spectacle';

const CustomLink = styled(props => (
  <Link {...props}>
    {'children' in props
      ? props.children
      : props.href}
  </Link>
))`
  display: block;
`;

CustomLink.defaultProps = {
  target: '_blank',
  textColor: 'quaternary',
};

export default CustomLink;
