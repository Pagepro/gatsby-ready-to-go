/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Flex } from 'theme-ui';
import { Meta } from '@storybook/react/types-6-0';

import { baseIcons } from './consts';
import { IconsDemoProps } from './types';

const iconsStoriesMeta: Meta = {
  title: 'Styles/Icons',
  argTypes: {
    items: {
      table: { disable: true },
      defaultValue: baseIcons,
    },
  },
};

export default iconsStoriesMeta;

export const Base: React.FC<IconsDemoProps> = ({ items }) => (
  <Flex
    sx={{
      flexWrap: 'wrap',
      alignItems: 'center',
    }}
  >
    {items.map(({ name, icon: Icon }) => (
      <Box
        m="1rem"
        sx={{
          textAlign: 'center',
        }}
        key={name}
      >
        <Flex
          sx={{
            width: '6.25rem',
            height: '4rem',
            border: '1px solid #eee',
            marginBottom: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2rem',
          }}
        >
          <Icon />
        </Flex>
        <Text sx={{ fontSize: '0.75rem' }}>{name}</Text>
      </Box>
    ))}
  </Flex>
);
