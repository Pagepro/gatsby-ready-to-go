/** @jsx jsx */
import { jsx, Text, Box, Flex } from 'theme-ui';

import { IconHello } from 'assets/svg';
import Inner from 'components/styles/Inner';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ title, description }) => (
  <Flex as="header" variant="header">
    <Inner>
      <Flex variant="header.content">
        <Flex variant="header.icon">
          <IconHello />
        </Flex>
        <Box>
          <Text as="h1" variant="heading1" sx={{ variant: 'header.title' }}>
            {title}
          </Text>
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
