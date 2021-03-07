/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Text, Box, Flex } from 'theme-ui';

import { IconHello } from 'assets/svg';
import Inner from 'components/styles/Inner';
import { HeaderProps } from './types';
import { StyledHeaderTitle } from './styles';

const Header: React.FC<HeaderProps> = ({ title, description }) => (
  <Flex as="header" variant="header">
    <Inner>
      <Flex variant="header.content">
        <Flex variant="header.icon">
          <IconHello />
        </Flex>
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
      </Flex>
    </Inner>
  </Flex>
);

export default Header;
