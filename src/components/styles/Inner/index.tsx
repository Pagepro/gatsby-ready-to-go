import React from 'react';

import { StyledInner } from './styles';

const Inner: React.FC = ({ children }) => (
  <StyledInner variant="inner">{children}</StyledInner>
);

export default Inner;
