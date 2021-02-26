/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
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
  <div
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
    }}
  >
    {items.map(({ name, icon: Icon }) => (
      <div
        sx={{
          margin: '1rem',
          textAlign: 'center',
        }}
        key={name}
      >
        <div
          sx={{
            display: 'flex',
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
        </div>
        <Text sx={{ fontSize: '0.75rem' }}>{name}</Text>
      </div>
    ))}
  </div>
);
