import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Header from '.';
import { HeaderProps } from './types';

const headerStoriesMeta: Meta = {
  title: 'Organisms/Header',
  component: Header,
  argTypes: {
    title: {
      name: 'Title',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
      },
      defaultValue: 'This is a title',
    },
    description: {
      name: 'Description',
      control: {
        type: 'text',
      },
      defaultValue: 'Put any description here',
    },
  },
};

export default headerStoriesMeta;

export const Base: Story<HeaderProps> = (args) => <Header {...args} />;
