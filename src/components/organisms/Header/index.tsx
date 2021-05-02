import React from 'react';
import { Text, Box } from 'theme-ui';

import { IconHello } from 'assets/svg';
import Inner from 'components/styles/Inner';
import { HeaderProps } from './types';
import {
  StyledHeader,
  StyledHeaderContent,
  StyledHeaderIcon,
  StyledHeaderTitle,
} from './styles';

const Header: React.FC<HeaderProps> = ({ title, description }) => (
  <StyledHeader as="header">
    <Inner>
      <StyledHeaderContent>
        <StyledHeaderIcon variant="header.icon">
          <IconHello />
        </StyledHeaderIcon>
        <Box>
          <StyledHeaderTitle as="h1" variant="heading1">
            {title}
          </StyledHeaderTitle>
          {description && (
            <Text as="p" variant="text">
              {description}
            </Text>
          )}
        </Box>
      </StyledHeaderContent>
    </Inner>
  </StyledHeader>
);

export default Header;
